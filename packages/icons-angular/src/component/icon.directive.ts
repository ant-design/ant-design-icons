import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { IconDefinition, ThemeType } from '../types';
import { parseIconType } from '../utils';
import { IconService } from './icon.service';

export interface RenderMeta {
  type: string | IconDefinition;
  theme?: ThemeType;
  twoToneColor?: string;
}

function checkMeta(prev: RenderMeta, after: RenderMeta): boolean {
  return prev.type === after.type && prev.theme === after.theme && prev.twoToneColor === after.twoToneColor;
}

export abstract class IconBase {
  protected abstract readonly el: HTMLElement;
  protected abstract readonly renderer: Renderer2;
  protected abstract readonly iconService: IconService;
  protected abstract get selfRenderMeta(): RenderMeta;

  /**
   * Render a new icon in the current element. Remove the icon when `type` is falsy.
   */
  protected _changeIcon(): Promise<SVGElement | null> {
    return new Promise<SVGElement | null>(resolve => {
      const beforeMeta = this.selfRenderMeta;
      const { type, theme, twoToneColor } = beforeMeta;
      if (!type) {
        this._clearSVGElement();
        resolve(null);
        return;
      }

      const mergedType = parseIconType(type, theme, this.iconService.defaultTheme);

      this.iconService.getRenderedContent(mergedType, twoToneColor).subscribe(svg => {
        // avoid race condition
        // see https://github.com/ant-design/ant-design-icons/issues/315
        const afterMeta = this.selfRenderMeta;
        if (checkMeta(beforeMeta, afterMeta)) {
          this._setSVGElement(svg);
          resolve(svg);
        } else {
          resolve(null);
        }
      });
    });
  }

  protected _setSVGElement(svg: SVGElement): void {
    this._clearSVGElement();
    this.renderer.appendChild(this.el, svg);
  }

  protected _clearSVGElement(): void {
    const children = this.el.childNodes;
    const length = children.length;
    for (let i = length - 1; i >= 0; i--) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const child = children[i] as any;
      if (child.tagName?.toLowerCase() === 'svg') {
        this.renderer.removeChild(this.el, child);
      }
    }
  }
}

@Directive({
  selector: '[antIcon]'
})
export class IconDirective extends IconBase {
  protected readonly el = inject(ElementRef).nativeElement as HTMLElement;
  protected readonly renderer = inject(Renderer2);
  protected readonly iconService = inject(IconService);

  readonly type = input.required<string | IconDefinition>();
  readonly theme = input<ThemeType>();
  readonly twoToneColor = input<string>();

  protected get selfRenderMeta(): RenderMeta {
    return {
      type: this.type(),
      theme: this.theme(),
      twoToneColor: this.twoToneColor()
    };
  }

  constructor() {
    super();
    effect(() => {
      void this.type();
      void this.theme();
      void this.twoToneColor();
      this._changeIcon();
    });
  }
}
