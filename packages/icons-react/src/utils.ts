import { IconDefinition } from '@ant-design/icons';

export function log(message: string) {
  if (!(process && process.env && process.env.NODE_ENV === 'production')) {
    console.error(`[@ant-design/icons-react]: ${message}.`);
  }
}

export function isIconDefinition(target: any): target is IconDefinition {
  return typeof target === 'object' && target.name && target.width && Array.isArray(target.children);
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
        acc[key] = val;
    }
    return acc;
  }, {});
}

export interface Attrs {
  [key: string]: string;
}
