import { generate as generateColor } from 'ant-design-palettes';

export function log(message) {
  if (!(process && process.env && process.env.NODE_ENV === 'production')) {
    console.error(`[@ant-design/icons-react]: ${message}.`);
  }
}

export function isIconDefinition(target) {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (typeof target.icon === 'object' || typeof target.icon === 'function')
  );
}

export function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
    const val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}

export class MiniMap {
  get size() {
    return Object.keys(this.collection).length;
  }
  collection = {};
  clear() {
    this.collection = {};
  }
  delete(key) {
    return delete this.collection[key];
  }
  get(key) {
    return this.collection[key];
  }
  has(key) {
    return Boolean(this.collection[key]);
  }
  set(key, value) {
    this.collection[key] = value;
    return this;
  }
}

export function generate(
  h,
  node,
  key,
  rootProps
) {
  if (!rootProps) {
    return h(
      node.tag,
      { key, attrs: {...normalizeAttrs(node.attrs)} },
      (node.children || []).map((child, index) =>
        generate(h, child, `${key}-${node.tag}-${index}`)
      )
    );
  }
  return h(
    node.tag,
    {
      key,
      ...rootProps,
      attrs: {...normalizeAttrs(node.attrs), ...rootProps.attrs}
    },
    (node.children || []).map((child, index) =>
      generate(h, child, `${key}-${node.tag}-${index}`)
    )
  );
}

export function getSecondaryColor(primaryColor) {
  // choose the second color
  return generateColor(primaryColor)[0];
}

export function withSuffix(
  name,
  theme
) {
  switch (theme) {
    case 'fill':
      return `${name}-fill`;
    case 'outline':
      return `${name}-o`;
    case 'twotone':
      return `${name}-twotone`;
    default:
      throw new TypeError(`Unknown theme type: ${theme}, name: ${name}`);
  }
}
