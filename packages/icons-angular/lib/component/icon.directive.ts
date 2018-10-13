import {
  Input,
  OnChanges,
  ElementRef,
  Directive, Renderer2
} from '@angular/core';
import { IconService } from './icon.service';
import { IconDefinition, ThemeType } from '../types';
import { isIconDefinition, printErr, withSuffix } from '../utils';

/**
 * Developers use this component to render an SVG element.
 *
 * For memory usage consideration, this component should be as minimal as possible. IconService would do the most work.
 */
@Directive({
  selector: '[antIcon]'
})
export class IconDirective implements OnChanges {
  @Input() type: string | IconDefinition;
  @Input() theme: ThemeType;
  @Input() twoToneColor: string;

  protected _changeIcon(): Promise<SVGAElement | null> {
    return new Promise((resolve, reject) => {
      if (this.type) {
        this._iconService.getRenderedContent(this._parseIconType(this.type, this.theme), this.twoToneColor).subscribe(svg => {
          if (svg) {
            this._setSVGElement(svg);
            resolve(svg as SVGAElement);
          } else {
            reject(null);
          }
        });
      } else {
        reject(null);
      }
    });
  }

  protected _parseIconType(type: string | IconDefinition, theme: ThemeType): IconDefinition | string {
    if (isIconDefinition(type)) {
      return type;
    } else {
      const typeTr = type as string;
      if (typeTr.endsWith('-fill') || typeTr.endsWith('-o') || typeTr.endsWith('-twotone')) {
        if (!!theme) {
          printErr(`'type' ${type} already gets a theme inside so 'theme' ${theme} would be ignored`);
        }
        return type;
      } else {
        return withSuffix(type as string, theme || this._iconService.defaultTheme);
      }
    }
  }

  protected _setSVGElement(svg: SVGElement): void {
    this._clearSVGElement();
    this._renderer.appendChild(this._elementRef.nativeElement, svg);
  }

  protected _clearSVGElement(): void {
    const self: HTMLElement = this._elementRef.nativeElement;
    const children = self.childNodes;
    const childCount = children.length;

    for (let i = childCount - 1; i >= 0; i--) {
      const child = children[i] as HTMLElement;
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
    this._changeIcon();
  }
}
