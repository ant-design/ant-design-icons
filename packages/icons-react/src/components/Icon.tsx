import { IconDefinition } from '@ant-design/icons/lib/types';
import * as React from 'react';
import { generate, isIconDefinition, log, MiniMap } from '../utils';

export interface IconProps {
  type: string | IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}

class Icon extends React.Component<IconProps> {
  static displayName = 'IconReact';
  static definitions = new MiniMap<IconDefinition>();
  static add(...icons: IconDefinition[]) {
    icons.forEach((icon) => {
      this.definitions.set(icon.nameWithTheme, icon);
    });
  }
  static clear() {
    this.definitions.clear();
  }
  static get(key: string) {
    return this.definitions.get(key);
  }

  render() {
    const { type, className, onClick, style } = this.props;

    let target: IconDefinition | undefined;
    if (isIconDefinition(type)) {
      target = type;
    } else if (typeof type === 'string') {
      target = Icon.get(type);
      if (!target) {
        log(`Could not find icon: ${type}`);
        return null;
      }
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`);
      return null;
    }
    return generate(target, `svg-${target.name}`, {
      className,
      onClick,
      style,
      ['data-icon']: target.name,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      ['aria-hidden']: 'true'
    });
  }
}

export default Icon;
