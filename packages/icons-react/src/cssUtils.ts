const APPEND_ORDER = 'data-rc-order';
const APPEND_PRIORITY = 'data-rc-priority';
const MARK_KEY = 'rc-util-key';

const containerCache = new Map<Element | ShadowRoot, Element | ShadowRoot>();

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

function contains(root: Node, node: Node) {
  if (!root || !node) {
    return false;
  }

  if (root.contains) {
    return root.contains(node);
  }

  let current: Node = node;
  while (current) {
    if (current === root) {
      return true;
    }
    current = current.parentNode as Node;
  }

  return false;
}

function getMark({ mark }: { mark?: string } = {}) {
  if (mark) {
    return mark.startsWith('data-') ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}

function getContainer(option: { attachTo?: Element | ShadowRoot }) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector('head');
  return head || document.body;
}

function getOrder(prepend?: boolean | 'queue') {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

function findStyles(container: Element | ShadowRoot) {
  return Array.from((containerCache.get(container) || container).children).filter(
    node => node.tagName === 'STYLE',
  ) as HTMLStyleElement[];
}

function injectCSS(
  css: string,
  option: {
    attachTo?: Element | ShadowRoot;
    csp?: { nonce?: string };
    mark?: string;
    prepend?: boolean | 'queue';
    priority?: number;
    styles?: HTMLStyleElement[];
  } = {},
) {
  if (!canUseDom()) {
    return null;
  }

  const { csp, prepend, priority = 0 } = option;
  const mergedOrder = getOrder(prepend);
  const isPrependQueue = mergedOrder === 'prependQueue';
  const styleNode = document.createElement('style');

  styleNode.setAttribute(APPEND_ORDER, mergedOrder);

  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, `${priority}`);
  }

  if (csp?.nonce) {
    styleNode.nonce = csp.nonce;
  }

  styleNode.innerHTML = css;

  const container = getContainer(option);
  const { firstChild } = container;

  if (prepend) {
    if (isPrependQueue) {
      const existStyle = (option.styles || findStyles(container)).filter(node => {
        if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }

        const nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });

      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}

function findExistNode(
  key: string,
  option: {
    attachTo?: Element | ShadowRoot;
    mark?: string;
    styles?: HTMLStyleElement[];
  } = {},
) {
  let { styles } = option;
  styles ||= findStyles(getContainer(option));
  return styles.find(node => node.getAttribute(getMark(option)) === key);
}

function syncRealContainer(
  container: Element | ShadowRoot,
  option: {
    attachTo?: Element | ShadowRoot;
    csp?: { nonce?: string };
    mark?: string;
    prepend?: boolean | 'queue';
    priority?: number;
    styles?: HTMLStyleElement[];
  },
) {
  const cachedRealContainer = containerCache.get(container);

  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS('', option);

    if (!placeholderStyle) {
      return;
    }

    const { parentNode } = placeholderStyle;
    containerCache.set(container, parentNode as Element | ShadowRoot);
    container.removeChild(placeholderStyle);
  }
}

export function updateCSS(
  css: string,
  key: string,
  originOption: {
    attachTo?: Element | ShadowRoot;
    csp?: { nonce?: string };
    mark?: string;
    prepend?: boolean | 'queue';
    priority?: number;
  } = {},
) {
  const container = getContainer(originOption);
  const styles = findStyles(container);
  const option = {
    ...originOption,
    styles,
  };

  syncRealContainer(container, option);

  const existNode = findExistNode(key, option);

  if (existNode) {
    if (option.csp?.nonce && existNode.nonce !== option.csp.nonce) {
      existNode.nonce = option.csp.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  const newNode = injectCSS(css, option);
  newNode?.setAttribute(getMark(option), key);

  return newNode;
}

function getRoot(ele: HTMLElement | null) {
  return ele?.getRootNode?.();
}

export function getShadowRoot(ele: HTMLElement | null) {
  const root = getRoot(ele);

  return typeof ShadowRoot !== 'undefined' && root instanceof ShadowRoot ? root : null;
}

const warned: Record<string, boolean> = {};

export function warningOnce(valid: boolean, message: string) {
  if (valid || warned[message]) {
    return;
  }

  if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
    console.error(`Warning: ${message}`);
  }

  warned[message] = true;
}
