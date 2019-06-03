import { AbstractNode, IconDefinition } from '@ant-design/icons/lib/types';
import * as React from 'react';
import {
  generate,
  getSecondaryColor,
  isIconDefinition,
  log,
  MiniMap,
  withSuffix
} from '../utils';

export interface IconProps {
  type: string | IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
  focusable?: string;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  secondaryColor: string;
}

const twoToneColorPalette: TwoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6'
};

class Icon extends React.Component<IconProps> {
  static displayName = 'IconReact';
  static definitions = new MiniMap<IconDefinition>();
  static add(...icons: IconDefinition[]) {
    icons.forEach((icon) => {
      this.definitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }
  static clear() {
    this.definitions.clear();
  }

  static get(key?: string, colors: TwoToneColorPalette = twoToneColorPalette) {
    if (key) {
      let target = this.definitions.get(key);
      if (target && typeof target.icon === 'function') {
        target = {
          ...target,
          icon: target.icon(colors.primaryColor, colors.secondaryColor)
        };
      }
      return target;
    }
  }

  static setTwoToneColors({
    primaryColor,
    secondaryColor
  }: TwoToneColorPaletteSetter) {
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor =
      secondaryColor || getSecondaryColor(primaryColor);
  }

  static getTwoToneColors(): TwoToneColorPalette {
    return {
      ...twoToneColorPalette
    };
  }

  render() {
    const {
      type,
      className,
      onClick,
      style,
      primaryColor,
      secondaryColor,
      ...rest
    } = this.props;

    let target: IconDefinition | undefined;
    let colors: TwoToneColorPalette = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    if (isIconDefinition(type)) {
      target = type;
    } else if (typeof type === 'string') {
      target = Icon.get(type, colors);
      if (!target) {
        // log(`Could not find icon: ${type}`);
        return null;
      }
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`);
      return null;
    }
    if (target && typeof target.icon === 'function') {
      target = {
        ...target,
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      };
    }
    return generate(target.icon as AbstractNode, `svg-${target.name}`, {
      className,
      onClick,
      style,
      ['data-icon']: target.name,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      ['aria-hidden']: 'true',
      ...rest
    });
  }
}

export default Icon;
