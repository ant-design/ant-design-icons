import {
  Input,
  OnChanges,
  ElementRef,
  Directive, Renderer2
} from '@angular/core';
import { IconService } from './icon.service';
import { IconDefinition, ThemeType } from '../types';
import { isIconDefinition, printErr, withSuffix, alreadyHasAThemeSuffix } from '../utils';

/**
 * Developers use this component to render an SVG element.
 */
@Directive({
  selector: '[antIcon]'
})
export class IconDirective implements OnChanges {
  @Input() type: string | IconDefinition;
  @Input() theme: ThemeType;
  @Input() twoToneColor: string;

  /**
   * Render an icon with given type and theme. Return an SVG element for extra behaviors (extended by child classes).
   */
  protected _changeIcon(): Promise<SVGAElement | null> {
    return new Promise((resolve, reject) => {
      if (!this.type) {
        this._clearSVGElement();
      } else {
        this._iconService.getRenderedContent(this._parseIcon(this.type, this.theme), this.twoToneColor)
        .subscribe(svg => {
          if (svg) {
            this._setSVGElement(svg);
            resolve(svg as SVGAElement);
          } else {
            reject(null);
          }
        });
      }
    });
  }

  /**
   * Parse an icon's type.
   */
  protected _parseIcon(type: string | IconDefinition, theme: ThemeType): IconDefinition | string {
    if (isIconDefinition(type)) {
      return type;
    } else {
      if (alreadyHasAThemeSuffix(type)) {
        if (!!theme) {
          printErr(`'type' ${type} already gets a theme inside so 'theme' ${theme} would be ignored`);
        }
        return type;
      } else {
        return withSuffix(type, theme || this._iconService.defaultTheme);
      }
    }
  }

  /**
   * Render an SVG element into the directive after removing other icons.
   */
  protected _setSVGElement(svg: SVGElement): void {
    const self: HTMLElement = this._elementRef.nativeElement;
    this._clearSVGElement();
    this._renderer.appendChild(self, svg);
  }

  protected _clearSVGElement(): void {
    const self: HTMLElement = this._elementRef.nativeElement;
    const children = self.childNodes;
    const childCount = children.length;
    for (let i = childCount - 1; i >= 0; i--) {
      const child = children[ i ] as HTMLElement;
      if (child.tagName.toLowerCase() === 'svg') {
        this._renderer.removeChild(self, child);
      }
    }
  }

  constructor(
    protected _iconService: IconService,
    protected _elementRef: ElementRef,
    protected _renderer: Renderer2
  ) {
  }

  ngOnChanges(): void {
    this._changeIcon().then(() => {
    });
  }
}
