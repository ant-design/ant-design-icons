import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Optional, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  IconDefinition,
  CachedIconDefinition,
  TwoToneColorPalette,
  TwoToneColorPaletteSetter,
  ThemeType,
  StringifyIconDefinition
} from '../types';
import {
  getSecondaryColor,
  withSuffix,
  isStringifyIconDefinition,
  printErr,
  cloneSVG,
  withSuffixAndColor,
  getIconDefinitionFromAbbr, replaceFillColor
} from '../utils';
import { renderIconDefinitionToSVGElement } from '@ant-design/icons/lib/helpers';
export { renderIconDefinitionToSVGElement } from '@ant-design/icons/lib/helpers';

export class IconService {
  defaultTheme: ThemeType = 'outline';

  protected _renderer: Renderer2;

  /**
   * Register icons.
   */
  protected _svgDefinitions = new Map<string, StringifyIconDefinition>();

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

  protected _assetsSource = '';

  set twoToneColor({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter) {
    if (primaryColor && typeof primaryColor === 'string' && typeof secondaryColor === 'string' || typeof secondaryColor === 'undefined') {
      this._twoToneColorPalette.primaryColor = primaryColor;
      this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    }
  }

  get twoToneColor(): TwoToneColorPaletteSetter {
    return { ...this.twoToneColor } as TwoToneColorPalette; // Make a copy to avoid unexpected changes.
  }

  /**
   * Register IconDefinition provided by Ant Design, parsing AbstractNode to svg string.
   * @param icons
   */
  addIcon(...icons: IconDefinition[]): void {
    const parsedIcons = icons.map(icon => {
      const stringify = renderIconDefinitionToSVGElement(icon, {
        extraSVGAttrs: {
          width : '1em',
          height: '1em',
          fill  : 'currentColor'
        }
      });
      return {
        name : icon.name,
        theme: icon.theme,
        icon : stringify
      } as StringifyIconDefinition;
    });

    this._addIconLiteral(...parsedIcons);
  }

  changeAssetsSource(prefix: string): void {
    this._assetsSource = prefix.endsWith('/') ? prefix : prefix + '/';
  }

  /**
   * Register icon.
   * @param icons Icons that users want to use in their projects. User defined icons and predefined
   *   icons provided by ant-design should implement IconDefinition both.
   */
  protected _addIconLiteral(...icons: StringifyIconDefinition[]): void {
    icons.forEach(icon => {
      this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }

  protected _get(key: string): StringifyIconDefinition | null {
    return this._svgDefinitions.get(key) || null;
  }

  /**
   * Get an static file and return it as a string, create a IconDefinition and cache it or return null.
   */
  protected _getFromRemote(url: string): Observable<StringifyIconDefinition | null> {
    if (this._http) {
      const icon: StringifyIconDefinition = getIconDefinitionFromAbbr(url);
      return this._http.get(
        `${this._assetsSource}assets/${icon.theme}/${icon.name}.svg`,
        { responseType: 'text' }
      ).pipe(
        map((svgString: string) => {
          icon.icon = svgString;
          this._addIconLiteral(icon);
          return icon;
        }),
        catchError(() => {
          printErr(`the icon ${url} does not exist in your assets folder`);
          return observableOf(null);
        })
      );
    } else {
      return observableOf(null);
    }
  }

  /**
   * Icon component would call this method to get a SVG element.
   * This method returns a Observable SVG element because when user wants to get an icon from URL, it would be async,
   * so we provided a unified interface here.
   *
   * TODO: namespace in the future
   */
  getRenderedContent(icon: StringifyIconDefinition | string, twoToneColor?: string): Observable<SVGElement | null> {
    const definitionOrNull: StringifyIconDefinition | null = isStringifyIconDefinition(icon)
      ? icon as StringifyIconDefinition
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

  protected _loadSVGFromCacheOrCreateNew(icon: StringifyIconDefinition, twoToneColor?: string): SVGElement {
    let svg: SVGElement;
    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
    const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
    const key = withSuffixAndColor(icon.name, icon.theme, pri, sec);
    const cached = this._svgCachedDefinitions.get(key);

    // If this icon is used before, there should be a copy in cachedDefinitions, just copy it.
    // Otherwise, generate one from string or SVG element, and cache it.
    if (!cached) {
      svg = this._setSVGAttribute(this._colorizeSVGIcon(
        typeof icon.icon === 'string'
          ? this._createSVGElementFromString(icon.icon)
          : icon.icon
        , (icon.theme === 'twotone'), pri, sec
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

  /**
   * Clear all cached icons.
   */
  clear(): void {
    this._svgDefinitions.clear();
  }

  constructor(
    protected _rendererFactory: RendererFactory2,
    @Optional() protected _http: HttpClient,
    @Optional() @Inject(DOCUMENT) protected _document: any
  ) {
    // For SSR.
    this._renderer = this._rendererFactory.createRenderer(null, null);
  }
}
