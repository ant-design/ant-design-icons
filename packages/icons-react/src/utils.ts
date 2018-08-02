import { IconDefinition } from '@ant-design/icons';

export function log(message: string) {
  if (!(process && process.env && process.env.NODE_ENV === 'production')) {
    console.error(`[@ant-design/icons-react]: ${message}.`);
  }
}

export function isIconDefinition(target: any): target is IconDefinition {
  return typeof target === 'object' &&
    target.name && target.width && Array.isArray(target.children) &&
    typeof target.viewBox === 'string';
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

export class MiniMap<V> {
  get size() {
    return Object.keys(this.collection).length;
  }
  private collection: { [key: string]: V } = {};
  clear(): void {
    this.collection = {};
  }
  delete(key: string): boolean {
    return delete this.collection[key];
  }
  get(key: string): V | undefined {
    return this.collection[key];
  }
  has(key: string): boolean {
    return Boolean(this.collection[key]);
  }
  set(key: string, value: V): this {
    this.collection[key] = value;
    return this;
  }
}
