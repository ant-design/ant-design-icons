import { DOCUMENT } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import {
  Inject,
  Optional,
  Renderer2,
  RendererFactory2,
  SecurityContext
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of as rxof, Observable, Subject } from 'rxjs';
import {
  catchError,
  filter,
  finalize,
  map,
  share,
  take,
  tap
} from 'rxjs/operators';
import {
  CachedIconDefinition,
  IconDefinition,
  ThemeType,
  TwoToneColorPalette,
  TwoToneColorPaletteSetter
} from '../types';
import {
  cloneSVG,
  getIconDefinitionFromAbbr,
  getNameAndNamespace,
  getSecondaryColor,
  hasNamespace,
  isIconDefinition,
  replaceFillColor,
  warn,
  withSuffix,
  withSuffixAndColor
} from '../utils';
import {
  DynamicLoadingTimeoutError,
  HttpModuleNotImport,
  IconNotFoundError,
  NameSpaceIsNotSpecifyError,
  SVGTagNotFoundError,
  UrlNotSafeError
} from './icon.error';

const JSONP_HANDLER_NAME = '__ant_icon_load';

export class IconService {
  defaultTheme: ThemeType = 'outline';

  set twoToneColor({
    primaryColor,
    secondaryColor
  }: TwoToneColorPaletteSetter) {
    this._twoToneColorPalette.primaryColor = primaryColor;
    this._twoToneColorPalette.secondaryColor =
      secondaryColor || getSecondaryColor(primaryColor);
  }

  get twoToneColor(): TwoToneColorPaletteSetter {
    // Make a copy to avoid unexpected changes.
    return { ...this._twoToneColorPalette } as TwoToneColorPalette;
  }

  protected _renderer: Renderer2;
  protected _http: HttpClient;

  /**
   * All icon definitions would be registered here.
   */
  protected readonly _svgDefinitions = new Map<string, IconDefinition>();

  /**
   * Cache all rendered icons. Icons are identified by name, theme,
   * and for twotone icons, primary color and secondary color.
   */
  protected readonly _svgRenderedDefinitions = new Map<string, CachedIconDefinition>();

  protected _inProgressFetches = new Map<
    string,
    Observable<IconDefinition | null>
  >();

  /**
   * Url prefix for fetching inline SVG by dynamic importing.
   */
  protected _assetsUrlRoot = '';

  protected _twoToneColorPalette: TwoToneColorPalette = {
    primaryColor: '#333333',
    secondaryColor: '#E6E6E6'
  };

  /** A flag indicates whether jsonp loading is enabled. */
  private _enableJsonpLoading = false;
  private readonly _jsonpIconLoad$ = new Subject<IconDefinition>();

  constructor(
    protected _rendererFactory: RendererFactory2,
    @Optional() protected _handler: HttpBackend,
    // tslint:disable-next-line:no-any
    @Optional() @Inject(DOCUMENT) protected _document: any,
    protected sanitizer: DomSanitizer
  ) {
    this._renderer = this._rendererFactory.createRenderer(null, null);
    if (this._handler) {
      this._http = new HttpClient(this._handler);
    }
  }

  /**
   * Call this method to switch to jsonp like loading.
   */
  useJsonpLoading(): void {
    if (!this._enableJsonpLoading) {
      this._enableJsonpLoading = true;

      window[JSONP_HANDLER_NAME] = (icon: IconDefinition) => {
        this._jsonpIconLoad$.next(icon);
      };
    } else {
      warn('You are already using jsonp loading.');
    }
  }

  /**
   * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
   * @param prefix
   */
  changeAssetsSource(prefix: string): void {
    this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
  }

  /**
   * Add icons provided by ant design.
   * @param icons
   */
  addIcon(...icons: IconDefinition[]): void {
    icons.forEach(icon => {
      this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }

  /**
   * Register an icon. Namespace is required.
   * @param type
   * @param literal
   */
  addIconLiteral(type: string, literal: string): void {
    const [_, namespace] = getNameAndNamespace(type);
    if (!namespace) {
      throw NameSpaceIsNotSpecifyError();
    }
    this.addIcon({ name: type, icon: literal });
  }

  /**
   * Remove all cache.
   */
  clear(): void {
    this._svgDefinitions.clear();
    this._svgRenderedDefinitions.clear();
  }

  /**
   * Get a rendered `SVGElement`.
   * @param icon
   * @param twoToneColor
   */
  getRenderedContent(
    icon: IconDefinition | string,
    twoToneColor?: string
  ): Observable<SVGElement> {
    // If `icon` is a `IconDefinition`, go to the next step. If not, try to fetch it from cache.
    const definitionOrNull: IconDefinition | null = isIconDefinition(icon)
      ? (icon as IconDefinition)
      : this._svgDefinitions.get(icon) || null;

    // If `icon` is a `IconDefinition` of successfully fetch, wrap it in an `Observable`.
    // Otherwise try to fetch it from remote.
    const $iconDefinition = definitionOrNull
      ? rxof(definitionOrNull)
      : this._loadIconDynamically(icon as string);

    // If finally get an `IconDefinition`, render and return it. Otherwise throw an error.
    return $iconDefinition.pipe(
      map(i => {
        if (!i) {
          throw IconNotFoundError(icon as string);
        }
        return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
      })
    );
  }

  getCachedIcons(): Map<string, IconDefinition> {
    return this._svgDefinitions;
  }

  /**
   * Get raw svg and assemble a `IconDefinition` object.
   * @param type
   */
  protected _loadIconDynamically(
    type: string
  ): Observable<IconDefinition | null> {
    // If developer doesn't provide HTTP module nor enable jsonp loading, just throw an error.
    if (!this._http && !this._enableJsonpLoading) {
      return rxof(HttpModuleNotImport());
    }

    // If multi directive ask for the same icon at the same time,
    // request should only be fired once.
    let inProgress = this._inProgressFetches.get(type);

    if (!inProgress) {
      const [name, namespace] = getNameAndNamespace(type);

      // If the string has a namespace within, create a simple `IconDefinition`.
      const icon: IconDefinition = namespace
        ? { name: type, icon: '' }
        : getIconDefinitionFromAbbr(name);

      const suffix = this._enableJsonpLoading ? '.js' : '.svg';
      const url =
        (namespace
          ? `${this._assetsUrlRoot}assets/${namespace}/${name}`
          : `${this._assetsUrlRoot}assets/${icon.theme}/${icon.name}`) + suffix;

      const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);

      if (!safeUrl) {
        throw UrlNotSafeError(url);
      }

      const source = !this._enableJsonpLoading
        ? this._http
            .get(safeUrl, { responseType: 'text' })
            .pipe(map(literal => ({ ...icon, icon: literal })))
        : this._loadIconDynamicallyWithJsonp(icon, safeUrl);

      inProgress = source.pipe(
        tap(definition => this.addIcon(definition)),
        finalize(() => this._inProgressFetches.delete(type)),
        catchError(() => rxof(null)),
        share()
      );

      this._inProgressFetches.set(type, inProgress);
    }

    return inProgress;
  }

  protected _loadIconDynamicallyWithJsonp(icon: IconDefinition, url: string): Observable<IconDefinition> {
    return new Observable<IconDefinition>(subscriber => {
      const loader = this._document.createElement('script');
      const timer = setTimeout(() => {
        clean();
        subscriber.error(DynamicLoadingTimeoutError());
      }, 6000);

      loader.src = url;

      function clean(): void {
        loader.parentNode.removeChild(loader);
        clearTimeout(timer);
      }

      this._document.body.appendChild(loader);
      this._jsonpIconLoad$
          .pipe(
              filter(i => i.name === icon.name && i.theme === icon.theme),
              take(1)
          )
          .subscribe(i => {
            subscriber.next(i);
            clean();
          });
    });
  }

  /**
   * Render a new `SVGElement` for a given `IconDefinition`, or make a copy from cache.
   * @param icon
   * @param twoToneColor
   */
  protected _loadSVGFromCacheOrCreateNew(
    icon: IconDefinition,
    twoToneColor?: string
  ): SVGElement {
    let svg: SVGElement;

    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
    const sec =
      getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
    const key =
      icon.theme === 'twotone'
        ? withSuffixAndColor(icon.name, icon.theme, pri, sec)
        : icon.theme === undefined
        ? icon.name
        : withSuffix(icon.name, icon.theme);

    // Try to make a copy from cache.
    const cached = this._svgRenderedDefinitions.get(key);

    if (cached) {
      svg = cached.icon;
    } else {
      svg = this._setSVGAttribute(
        this._colorizeSVGIcon(
          // Icons provided by ant design should be refined to remove preset colors.
          this._createSVGElementFromString(
            hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)
          ),
          icon.theme === 'twotone',
          pri,
          sec
        )
      );
      // Cache it.
      this._svgRenderedDefinitions.set(key, {
        ...icon,
        icon: svg
      } as CachedIconDefinition);
    }

    return cloneSVG(svg);
  }

  protected _createSVGElementFromString(str: string): SVGElement {
    const div = this._document.createElement('div');
    div.innerHTML = str;
    const svg: SVGElement = div.querySelector('svg');
    if (!svg) {
      throw SVGTagNotFoundError;
    }
    return svg;
  }

  protected _setSVGAttribute(svg: SVGElement): SVGElement {
    this._renderer.setAttribute(svg, 'width', '1em');
    this._renderer.setAttribute(svg, 'height', '1em');
    return svg;
  }

  protected _colorizeSVGIcon(
    svg: SVGElement,
    twotone: boolean,
    pri: string,
    sec: string
  ): SVGElement {
    if (twotone) {
      const children = svg.childNodes;
      const length = children.length;
      for (let i = 0; i < length; i++) {
        const child: HTMLElement = children[i] as HTMLElement;
        if (child.getAttribute('fill') === 'secondaryColor') {
          this._renderer.setAttribute(child, 'fill', sec);
        } else {
          this._renderer.setAttribute(child, 'fill', pri);
        }
      }
    }
    this._renderer.setAttribute(svg, 'fill', 'currentColor');
    return svg;
  }
}
