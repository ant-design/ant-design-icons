import { IconDefinition } from 'antd-icons/esm';
import * as React from 'react';

export function convert(
  createElement: typeof React.createElement,
  icon: IconDefinition,
  extraProps: { [key: string]: any }) {
  const children = [];
  if (icon.style) {
    children.push(createElement('style', { key: `${icon.name}-style` }, icon.style));
  }
  const iconChildren = icon.children
    .map(({ tag, attrs }, index) => createElement(tag, { ...attrs, key: `${tag}-${index}` }));
  children.push(...iconChildren);
  return createElement(
    'svg',
    {
      ...extraProps,
      ['data-icon']: icon.name,
      viewBox: `0 0 ${icon.width} ${icon.height}`,
      width: '1em',
      height: '1em',
      fill: 'currentColor'
    },
    children
  );
}

export const convertThunk = convert.bind(null, React.createElement);
