import { DOCUMENT } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, Optional, Renderer2, RendererFactory2, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of as observableOf, Observable } from 'rxjs';
import { catchError, finalize, map, share, tap } from 'rxjs/operators';
import { CachedIconDefinition, IconDefinition, ThemeType, TwoToneColorPalette, TwoToneColorPaletteSetter } from '../types';
import {
  cloneSVG,
  getIconDefinitionFromAbbr,
  getNameAndNamespace,
  getSecondaryColor,
  hasNamespace,
  isIconDefinition,
  replaceFillColor,
  withSuffix,
  withSuffixAndColor
} from '../utils';
import { HttpModuleNotImport, IconNotFoundError, NameSpaceIsNotSpecifyError, SVGTagNotFoundError, UrlNotSafeError } from './icon.error';

export class IconService {
  defaultTheme: ThemeType = 'outline';

  protected _renderer: Renderer2;
  protected _http: HttpClient;

  /**
   * All icon definitions would be registered here.
   */
  protected _svgDefinitions = new Map<string, IconDefinition>();

  /**
   * Cache all rendered icons. Icons are identified by name, theme,
   * and for twotone icons, primary color and secondary color.
   */
  protected _svgRenderedDefinitions = new Map<string, CachedIconDefinition>();

  protected _inProgressFetches = new Map<string, Observable<IconDefinition | null>>();

  /**
   * Url prefix for fetching inline SVG by dynamic importing.
   */
  protected _assetsUrlRoot = '';

  protected _twoToneColorPalette: TwoToneColorPalette = {
    primaryColor  : '#333333',
    secondaryColor: '#E6E6E6'
  };

  set twoToneColor({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter) {
    this._twoToneColorPalette.primaryColor = primaryColor;
    this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  }

  get twoToneColor(): TwoToneColorPaletteSetter {
    return { ...this._twoToneColorPalette } as TwoToneColorPalette; // Make a copy to avoid unexpected changes.
  }

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
    const [ name, namespace ] = getNameAndNamespace(type);
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
  getRenderedContent(icon: IconDefinition | string, twoToneColor?: string): Observable<SVGElement> {
    // If `icon` is a `IconDefinition`, go to the next step. If not, try to fetch it from cache.
    const definition: IconDefinition | null | undefined = isIconDefinition(icon) ? icon as IconDefinition : this._svgDefinitions.get(icon as string);

    // If `icon` is a `IconDefinition` of successfully fetch, wrap it in an `Observable`. Otherwise try to fetch it from remote.
    const $iconDefinition = definition ? observableOf(definition) : this._getFromRemote(icon as string);

    // If finally get an `IconDefinition`, render and return it. Otherwise throw an error.
    return $iconDefinition.pipe(map(i => {
      if (!i) { throw IconNotFoundError(icon as string); }
      return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
    }));
  }

  /**
   * Get raw svg and assemble a `IconDefinition` object.
   * @param type
   */
  protected _getFromRemote(type: string): Observable<IconDefinition | null> {
    if (!this._http) { return observableOf(HttpModuleNotImport()); }

    // If multi directive ask for the same icon at the same time, http request should only be fired once.
    let inProgress = this._inProgressFetches.get(type);

    // If there's no other directive asking for the same icon, fire a request.
    if (!inProgress) {
      const [ name, namespace ] = getNameAndNamespace(type);

      // If the string has a namespace within, create a simple `IconDefinition`.
      const icon: IconDefinition = namespace
        ? { name, icon: '' }
        : getIconDefinitionFromAbbr(name);

      const url = namespace
        ? `${this._assetsUrlRoot}assets/${namespace}/${icon.name}.svg`
        : `${this._assetsUrlRoot}assets/${icon.theme}/${icon.name}.svg`;

      const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);

      if (!safeUrl) { throw UrlNotSafeError(url); }

      // Wrap a `IconDefinition`, cache it, delete the shared work.
      inProgress = this._http.get(safeUrl, { responseType: 'text' }).pipe(
        map(literal => ({ ...icon, icon: literal })),
        tap(definition => this.addIcon(definition)),
        finalize(() => this._inProgressFetches.delete(type)),
        catchError(() => observableOf(null)),
        share()
      );

      this._inProgressFetches.set(type, inProgress);
    }

    // Otherwise just reuse other directive's request.
    return inProgress;
  }

  /**
   * Render a new `SVGElement` for given `IconDefinition`, or make a copy from cache.
   * @param icon
   * @param twoToneColor
   */
  protected _loadSVGFromCacheOrCreateNew(icon: IconDefinition, twoToneColor?: string): SVGElement {
    let svg: SVGElement;

    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
    const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
    const key = icon.theme === 'twotone'
      ? withSuffixAndColor(icon.name, icon.theme, pri, sec)
      : icon.theme === undefined ? icon.name : withSuffix(icon.name, icon.theme);

    // Try to make a copy from cache.
    const cached = this._svgRenderedDefinitions.get(key);

    if (cached) {
      svg = cached.icon;
    } else {
      svg = this._setSVGAttribute(this._colorizeSVGIcon(
        // Icons provided by ant design should be refined to remove preset colors.
        this._createSVGElementFromString(hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)),
        icon.theme === 'twotone',
        pri,
        sec
      ));
      // Cache it.
      this._svgRenderedDefinitions.set(key, { ...icon, icon: svg } as CachedIconDefinition);
    }

    return cloneSVG(svg);
  }

  protected _createSVGElementFromString(str: string): SVGElement {
    const div = this._document.createElement('div');
    div.innerHTML = str;
    const svg: SVGElement = div.querySelector('svg');
    if (!svg) { throw SVGTagNotFoundError; }
    return svg;
  }

  protected _setSVGAttribute(svg: SVGElement): SVGElement {
    this._renderer.setAttribute(svg, 'width', '1em');
    this._renderer.setAttribute(svg, 'height', '1em');
    return svg;
  }

  protected _colorizeSVGIcon(svg: SVGElement, twotone: boolean, pri: string, sec: string): SVGElement {
    if (twotone) {
      const children = svg.childNodes;
      const length = children.length;
      for (let i = 0; i < length; i++) {
        const child: HTMLElement = children[ i ] as HTMLElement;
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
