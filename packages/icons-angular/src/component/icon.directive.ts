import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { IconDefinition, ThemeType } from '../types';
import { parseIconType } from '../utils';
import { IconService } from './icon.service';

interface RenderMeta {
  type: string | IconDefinition;
  theme?: ThemeType;
  twoToneColor?: string;
}

function checkMeta(prev: RenderMeta, after: RenderMeta): boolean {
  return prev.type === after.type && prev.theme === after.theme && prev.twoToneColor === after.twoToneColor;
}

export abstract class IconBase {
  protected abstract readonly _el: HTMLElement;
  protected abstract readonly _renderer: Renderer2;
  protected abstract readonly _iconService: IconService;
  protected abstract get _selfRenderMeta(): RenderMeta;

  /**
   * Render a new icon in the current element. Remove the icon when `type` is falsy.
   */
  protected _changeIcon(): Promise<SVGElement | null> {
    return new Promise<SVGElement | null>(resolve => {
      const beforeMeta = this._selfRenderMeta;
      const { type, theme, twoToneColor } = beforeMeta;
      if (!type) {
        this._clearSVGElement();
        resolve(null);
        return;
      }

      const mergedType = parseIconType(type, theme, this._iconService.defaultTheme);

      this._iconService.getRenderedContent(mergedType, twoToneColor).subscribe(svg => {
        // avoid race condition
        // see https://github.com/ant-design/ant-design-icons/issues/315
        const afterMeta = this._selfRenderMeta;
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
    this._renderer.appendChild(this._el, svg);
  }

  protected _clearSVGElement(): void {
    const children = this._el.childNodes;
    const length = children.length;
    for (let i = length - 1; i >= 0; i--) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const child = children[i] as any;
      if (child.tagName?.toLowerCase() === 'svg') {
        this._renderer.removeChild(this._el, child);
      }
    }
  }
}

@Directive({
  selector: '[antIcon]'
})
export class IconDirective extends IconBase {
  protected readonly _el = inject(ElementRef).nativeElement as HTMLElement;
  protected readonly _renderer = inject(Renderer2);
  protected readonly _iconService = inject(IconService);

  readonly type = input.required<string | IconDefinition>();
  readonly theme = input<ThemeType>();
  readonly twoToneColor = input<string>();

  protected get _selfRenderMeta(): RenderMeta {
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
