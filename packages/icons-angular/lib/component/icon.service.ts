import { DOCUMENT } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, Optional, Renderer2, RendererFactory2, SecurityContext } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, finalize, map, share, tap } from 'rxjs/operators';
import { CachedIconDefinition, IconDefinition, ThemeType, TwoToneColorPalette, TwoToneColorPaletteSetter } from '../types';
import {
  antIconConsolePrefix,
  cloneSVG,
  getIconDefinitionFromAbbr,
  getSecondaryColor,
  isIconDefinition, printErr,
  replaceFillColor,
  withSuffix,
  withSuffixAndColor,
  getNameAndNamespace,
  hasNamespace
} from '../utils';
import { DomSanitizer } from '@angular/platform-browser';

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
    primaryColor: '#333333',
    secondaryColor: '#E6E6E6'
  };

  set twoToneColor({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter) {
    this._twoToneColorPalette.primaryColor = primaryColor;
    this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  }

  get twoToneColor(): TwoToneColorPaletteSetter {
    return { ...this._twoToneColorPalette } as TwoToneColorPalette; // Make a copy to avoid unexpected changes.
  }

  changeAssetsSource(prefix: string): void {
    this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
  }

  addIcon(...icons: IconDefinition[]): void {
    icons.forEach(icon => {
      this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }

  addIconLiteral(type: string, literal: string): void {
    const [name, namespace] = getNameAndNamespace(type);
    if (!namespace) {
      throw new Error(`${antIconConsolePrefix}Type should have a namespace. Try "namespace:${name}".`);
    }
    this.addIcon({ name: type, icon: literal });
  }

  getRenderedContent(icon: IconDefinition | string, twoToneColor?: string): Observable<SVGElement> {
    const definition: IconDefinition | null = isIconDefinition(icon)
      ? icon as IconDefinition
      : this._svgDefinitions.get(icon as string);
    const $iconDefinition = definition ? observableOf(definition) : this._getFromRemote(icon as string);
    return $iconDefinition.pipe(map(i => {
      if (!i) {
        throw new Error(`${antIconConsolePrefix}the icon ${icon} does not exist or is not registered.`);
      }
      return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
    }));
  }

  protected _getFromRemote(type: string): Observable<IconDefinition | null> {
    if (!this._http) {
      printErr('You need to import "HttpClientModule" to use dynamic importing.');
      return observableOf(null);
    }

    let inProgress = this._inProgressFetches.get(type);

    if (!inProgress) {
      const [name, namespace] = getNameAndNamespace(type);
      const icon: IconDefinition = namespace
        ? { name, icon: '' }
        : getIconDefinitionFromAbbr(name);
      const url = namespace
        ? `${this._assetsUrlRoot}assets/${namespace}/${icon.name}.svg`
        : `${this._assetsUrlRoot}assets/${icon.theme}/${icon.name}.svg`;
      const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);
      
      if (!safeUrl) {
        throw new Error(`${antIconConsolePrefix}The url "${url}" is unsafe.`);
      }

      inProgress = this._http.get(safeUrl, { responseType: 'text' }).pipe(
        map(literal => ({ ...icon, icon: literal })),
        tap(definition => this.addIcon(definition)),
        finalize(() => this._inProgressFetches.delete(type)),
        catchError(() => observableOf(null)),
        share()
      );
      this._inProgressFetches.set(type, inProgress);
    }

    return inProgress;
  }

  protected _loadSVGFromCacheOrCreateNew(icon: IconDefinition, twoToneColor?: string): SVGElement {
    let svg: SVGElement;
    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
    const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
    const key = icon.theme === 'twotone' ? withSuffix(icon.name, icon.theme) : withSuffixAndColor(icon.name, icon.theme, pri, sec);
    const cached = this._svgRenderedDefinitions.get(key);

    if (!cached) {
      svg = this._setSVGAttribute(this._colorizeSVGIcon(
        this._createSVGElementFromString(hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)),
        icon.theme === 'twotone',
        pri,
        sec
      ));
      this._svgRenderedDefinitions.set(key, { ...icon, icon: svg } as CachedIconDefinition);
    } else {
      svg = cached.icon;
    }

    return cloneSVG(svg);
  }

  protected _createSVGElementFromString(str: string): SVGElement {
    const div = this._document.createElement('div');
    div.innerHTML = str;
    const svg: SVGElement = div.querySelector('svg');
    if (!svg) {
      throw new Error('<svg> tag not found');
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

  clear(): void {
    this._svgDefinitions.clear();
    this._svgRenderedDefinitions.clear();
  }

  constructor(
    protected _rendererFactory: RendererFactory2,
    @Optional() protected _handler: HttpBackend,
    @Optional() @Inject(DOCUMENT) protected _document: any,
    protected sanitizer: DomSanitizer
  ) {
    this._renderer = this._rendererFactory.createRenderer(null, null);
    if (this._handler) {
      this._http = new HttpClient(this._handler);
    }
  }
}
