import { IconDefinition } from '@ant-design/icons';
import * as React from 'react';

interface IAttrs {
  [key: string]: string;
}

function normalizeAttrs(attrs: IAttrs = {}): IAttrs {
  return Object.keys(attrs).reduce((acc: IAttrs, key) => {
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

export function convert(
  createElement: typeof React.createElement,
  icon: IconDefinition,
  extraProps: { [key: string]: any }) {
  const children = [];
  if (icon.style) {
    children.push(createElement('style', { key: `${icon.name}-style` }, icon.style));
  }
  const iconChildren = icon.children
    .map(({ tag, attrs }, index) => createElement(tag, { ...normalizeAttrs(attrs), key: `${tag}-${index}` }));
  children.push(...iconChildren);
  return createElement(
    'svg',
    {
      ...extraProps,
      ['data-icon']: icon.name,
      viewBox: `0 0 ${icon.width} ${icon.height}`,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      ['aria-hidden']: 'true'
    },
    children
  );
}

export const convertThunk = convert.bind(null, React.createElement);
