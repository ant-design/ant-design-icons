import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Optional, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, share, tap } from 'rxjs/operators';
import {
  IconDefinition,
  CachedIconDefinition,
  TwoToneColorPalette,
  TwoToneColorPaletteSetter,
  ThemeType
} from '../types';
import {
  getSecondaryColor,
  withSuffix,
  isIconDefinition,
  printErr,
  printWarn,
  cloneSVG,
  withSuffixAndColor,
  getIconDefinitionFromAbbr,
  replaceFillColor
} from '../utils';

export interface ReqIconTask {
  ob: Observable<IconDefinition | null>;
}

export class IconService {
  defaultTheme: ThemeType = 'outline';

  protected _renderer: Renderer2;
  protected _http: HttpClient;

  /**
   * Register icons.
   */
  protected _svgDefinitions = new Map<string, IconDefinition>();

  /**
   * Register rendered (with color) SVG icons.
   */
  protected _svgCachedDefinitions = new Map<string, CachedIconDefinition>();

  /**
   * Default color settings.
   */
  protected _twoToneColorPalette: TwoToneColorPalette = {
    primaryColor  : '#333333',
    secondaryColor: '#E6E6E6'
  };

  /**
   * A url prefix so users can determine a static asset root.
   */
  protected _assetsSource = '';

  /**
   * To note whether a request to an icon is under processing.
   */
  protected _httpQueue = new Map<string, ReqIconTask>();

  set twoToneColor({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter) {
    if (primaryColor && typeof primaryColor === 'string' && typeof secondaryColor === 'string' || typeof secondaryColor === 'undefined') {
      this._twoToneColorPalette.primaryColor = primaryColor;
      this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    }
  }

  get twoToneColor(): TwoToneColorPaletteSetter {
    return { ...this._twoToneColorPalette } as TwoToneColorPalette; // Make a copy to avoid unexpected changes.
  }

  changeAssetsSource(prefix: string): void {
    this._assetsSource = prefix.endsWith('/') ? prefix : prefix + '/';
  }

  /**
   * Register IconDefinition provided by Ant Design, parsing AbstractNode to svg string.
   * @param icons
   */
  addIcon(...icons: IconDefinition[]): void {
    this._addIconLiteral(...icons);
  }

  /**
   * Register icon.
   * @param icons Icons that users want to use in their projects. User defined icons and predefined
   *   icons provided by ant-design should implement IconDefinition both.
   */
  protected _addIconLiteral(...icons: IconDefinition[]): void {
    icons.forEach(icon => {
      this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }

  protected _get(key: string): IconDefinition | null {
    return this._svgDefinitions.get(key) || null;
  }

  /**
   * Get an static file and return it as a string, create a IconDefinition and cache it or return null.
   */
  protected _getFromRemote(url: string): Observable<IconDefinition | null> {
    if (this._http) {
      let task = this._httpQueue.get(url);
      let ob: Observable<IconDefinition | null>;
      if (task) {
        ob = task.ob;
      } else {
        ob = this._createObservableRequest(url);
        task = { ob };
        this._httpQueue.set(url, task);
      }
      return ob;
    } else {
      printWarn('You need to import HttpClient module to use dynamic importing');
      return observableOf(null);
    }
  }

  private _createObservableRequest(url: string): Observable<IconDefinition | null> {
    const icon: IconDefinition = getIconDefinitionFromAbbr(url);
    return this._http.get(
      `${this._assetsSource}assets/${icon.theme}/${icon.name}.svg`,
      { responseType: 'text' }
    ).pipe(
      share(), // Use `share` so if multi directives request the same icon, HTTP request would only be fired once.
      tap(() => this._httpQueue.delete(url)),
      map(svgString => {
        icon.icon = svgString;
        this._addIconLiteral(icon);
        return icon;
      }),
      catchError(() => {
        printErr(`the icon ${url} does not exist in your assets folder`);
        this._httpQueue.delete(url);
        return observableOf(null);
      })
    );
  }

  /**
   * Icon component would call this method to get a SVG element.
   * This method returns a Observable SVG element because when user wants to get an icon dynamically, that would be async,
   * so we provided a unified interface here.
   */
  getRenderedContent(icon: IconDefinition | string, twoToneColor?: string): Observable<SVGElement | null> {
    const definitionOrNull: IconDefinition | null = isIconDefinition(icon)
      ? icon as IconDefinition
      : this._get(icon as string);
    const $icon = definitionOrNull ? observableOf(definitionOrNull) : this._getFromRemote(icon as string);

    return $icon.pipe(
      map(i => {
        if (i) {
          return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
        } else {
          printErr(`the icon ${icon} does not exist or is not registered`);
          return null;
        }
      }));
  }

  protected _loadSVGFromCacheOrCreateNew(icon: IconDefinition, twoToneColor?: string): SVGElement {
    let svg: SVGElement;
    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
    const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
    const key = withSuffixAndColor(icon.name, icon.theme, pri, sec);
    const cached = this._svgCachedDefinitions.get(key);

    // If this icon is used before, there should be a copy in cachedDefinitions, just copy it.
    // Otherwise, generate one from string or SVG element, and cache it.
    if (!cached) {
      svg = this._setSVGAttribute(this._colorizeSVGIcon(
        typeof icon.icon === 'string' ? this._createSVGElementFromString(icon.icon) : icon.icon,
        icon.theme === 'twotone',
        pri,
        sec
      ));
      this._svgCachedDefinitions.set(key, { ...icon, icon: svg } as CachedIconDefinition);
    } else {
      svg = cached.icon;
    }

    return cloneSVG(svg);
  }

  protected _createSVGElementFromString(str: string): SVGElement {
    const colorParsed = replaceFillColor(str);
    const div = this._document.createElement('div');
    div.innerHTML = colorParsed;
    const svg: SVGElement = div.querySelector('svg');
    if (!svg) {
      throw Error('<svg> tag not found');
    }
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

  clear(): void {
    this._svgDefinitions.clear();
  }

  constructor(
    protected _rendererFactory: RendererFactory2,
    @Optional() protected _handler: HttpBackend,
    @Optional() @Inject(DOCUMENT) protected _document: any
  ) {
    this._renderer = this._rendererFactory.createRenderer(null, null);
    if (this._handler) {
      this._http = new HttpClient(this._handler);
    }
  }
}
