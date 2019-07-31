import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { IconDefinition, ThemeType } from '../types';
import { alreadyHasAThemeSuffix, getNameAndNamespace, isIconDefinition, printWarn, withSuffix } from '../utils';
import { IconService } from './icon.service';

@Directive({
  selector: '[antIcon]'
})
export class IconDirective implements OnChanges {
  @Input() type: string | IconDefinition;
  @Input() theme: ThemeType;
  @Input() twoToneColor: string;

  constructor(protected _iconService: IconService, protected _elementRef: ElementRef, protected _renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type || changes.theme || changes.twoToneColor) {
      this._changeIcon();
    }
  }

  /**
   * Render a new icon in the current element. Remove the icon when `type` is falsy.
   */
  protected _changeIcon(): Promise<SVGElement | null> {
    return new Promise<SVGElement | null>(resolve => {
      if (!this.type) {
        this._clearSVGElement();
        resolve(null);
      } else {
        this._iconService.getRenderedContent(
          this._parseIconType(this.type, this.theme),
          this.twoToneColor
        ).subscribe(svg => {
          this._setSVGElement(svg);
          resolve(svg);
        });
      }
    });
  }

  /**
   * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
   * If namespace is specified, ignore theme because it meaningless for users' icons.
   * @param type
   * @param theme
   */
  protected _parseIconType(type: string | IconDefinition, theme: ThemeType): IconDefinition | string {
    if (isIconDefinition(type)) {
      return type;
    } else {
      const [ name, namespace ] = getNameAndNamespace(type);
      if (namespace) {
        return type;
      }
      if (alreadyHasAThemeSuffix(name)) {
        if (!!theme) {
          printWarn(`'type' ${name} already gets a theme inside so 'theme' ${theme} would be ignored`);
        }
        return name;
      } else {
        return withSuffix(name, theme || this._iconService.defaultTheme);
      }
    }
  }

  protected _setSVGElement(svg: SVGElement): void {
    this._clearSVGElement();
    this._renderer.appendChild(this._elementRef.nativeElement, svg);
  }

  protected _clearSVGElement(): void {
    const el: HTMLElement = this._elementRef.nativeElement;
    const children = el.childNodes;
    const length = children.length;
    for (let i = length - 1; i >= 0; i--) {
      const child = children[ i ] as HTMLElement;
      if (child.tagName.toLowerCase() === 'svg') {
        this._renderer.removeChild(el, child);
      }
    }
  }
}
