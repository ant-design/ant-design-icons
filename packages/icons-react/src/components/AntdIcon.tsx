import { IconDefinition } from '@ant-design/icons';
import * as React from 'react';
import { isIconDefinition, log, MiniMap, normalizeAttrs } from '../utils';

export interface AntdIconProps {
  type: string | IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}

class AntdIcon extends React.Component<AntdIconProps> {

  static displayName = 'AntdIcon';
  static definitions = new MiniMap<IconDefinition>();
  static add(...icons: IconDefinition[]) {
    icons.forEach((icon) => {
      this.definitions.set(icon.name, icon);
    });
  }
  static clear() {
    this.definitions.clear();
  }
  static get(key: string) {
    return this.definitions.get(key);
  }

  render() {
    const { type, ...rest } = this.props;
    let target: IconDefinition | undefined;
    if (isIconDefinition(type)) {
      target = type;
    } else if (typeof type === 'string') {
      target = AntdIcon.get(type);
      if (!target) {
        log(`Could not find icon: ${type}`);
        return null;
      }
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`);
      return null;
    }

    const children = [];
    if (target.style) {
      children.push(
        <style key={`${target.name}-style`}>
          {target.style}
        </style>
      );
    }
    children.push(
      ...target.children
        .map(({ tag, attrs }, index) => {
          return React.createElement(
            tag,
            {
              ...normalizeAttrs(attrs),
              key: `${tag}-${index}`
            }
          );
        })
    );
    return (
      <svg
        {...rest}
        data-icon={target.name}
        viewBox={`0 0 ${target.width} ${target.height}`}
        width={`1em`}
        height={`1em`}
        fill={`currentColor`}
        aria-hidden={`true`}
      >
        {children}
      </svg>
    );
  }
}

export default AntdIcon;
