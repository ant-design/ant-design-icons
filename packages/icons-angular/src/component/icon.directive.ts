import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { IconDefinition, ThemeType } from '../types';
import { alreadyHasAThemeSuffix, getNameAndNamespace, isIconDefinition, warn, withSuffix } from '../utils';
import { IconService } from './icon.service';

interface RenderMeta {
  type: string | IconDefinition;
  theme: ThemeType;
  twoToneColor: string;
}

function checkMeta(prev: RenderMeta, after: RenderMeta): boolean {
  return prev.type === after.type && prev.theme === after.theme && prev.twoToneColor === after.twoToneColor;
}

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
        const preMeta = this._getSelfRenderMeta();
        this._iconService.getRenderedContent(
          this._parseIconType(this.type, this.theme),
          this.twoToneColor
        ).subscribe(svg => {
          // avoid race condition, see https://github.com/ant-design/ant-design-icons/issues/315
          if (checkMeta(preMeta, this._getSelfRenderMeta())) {
            this._setSVGElement(svg);
            resolve(svg);
          } else {
            resolve(null);
          }
        });
      }
    });
  }

  protected _getSelfRenderMeta(): RenderMeta {
    return {
      type: this.type,
      theme: this.theme,
      twoToneColor: this.twoToneColor
    };
  }

  /**
   * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
   * If namespace is specified, ignore theme because it meaningless for users' icons.
   *
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
          warn(`'type' ${name} already gets a theme inside so 'theme' ${theme} would be ignored`);
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
      const child = children[ i ] as any;
      if (child.tagName?.toLowerCase() === 'svg') {
        this._renderer.removeChild(el, child);
      }
    }
  }
}
