import { nextTick, h, getCurrentInstance } from 'vue';
import { AbstractNode, IconDefinition } from '@ant-design/icons-svg/lib/types';
import { generate as generateColor } from '@ant-design/colors';
import { useInjectIconContext } from './components/Context';
import { updateCSS, canUseDom } from './dynamicCSS';

export function warn(valid: boolean, message: string): void {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error(`Warning: ${message}`);
  }
}

export function warning(valid: boolean, message: string): void {
  warn(valid, `[@ant-design/icons-vue] ${message}`);
}

function camelCase(input: string) {
  return input.replace(/-(.)/g, (_match, g) => g.toUpperCase());
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isIconDefinition(target: any): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (typeof target.icon === 'object' || typeof target.icon === 'function')
  );
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
export interface Attrs {
  [key: string]: string;
}
export type StringKeyOf<T> = Extract<keyof T, string>;
export type EventHandlers<E> = {
  [K in StringKeyOf<E>]?: E[K] extends () => any ? E[K] : (payload: E[K]) => void;
};
export function generate(
  node: AbstractNode,
  key: string,
  rootProps?: { [key: string]: any } | false,
): any {
  if (!rootProps) {
    return h(
      node.tag,
      { key, ...node.attrs },
      (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)),
    );
  }
  return h(
    node.tag,
    {
      key,
      ...rootProps,
      ...node.attrs,
    },
    (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)),
  );
}

export function getSecondaryColor(primaryColor: string): string {
  // choose the second color
  return generateColor(primaryColor)[0];
}

export function normalizeTwoToneColors(
  twoToneColor: string | [string, string] | undefined,
): string[] {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
} as any;

export const iconStyles = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

function getRoot(ele: Node) {
  return ele && ele.getRootNode && ele.getRootNode();
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele: Node) {
  if (!canUseDom()) {
    return false;
  }
  return getRoot(ele) instanceof ShadowRoot;
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele: Node): ShadowRoot {
  return inShadow(ele) ? (getRoot(ele) as ShadowRoot) : null;
}

export const useInsertStyles = (): void => {
  const { prefixCls, csp } = useInjectIconContext();
  const instance = getCurrentInstance();
  let mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls.value);
  }

  nextTick(() => {
    if (!canUseDom()) {
      return;
    }
    const ele = instance.vnode.el as any;
    const shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, '@ant-design-vue-icons', {
      prepend: true,
      csp: csp.value,
      attachTo: shadowRoot,
    });
  });
};
