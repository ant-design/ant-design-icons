import * as React from 'react';
import { AbstractNode, IconDefinition } from '@ant-design/icons/lib/types';
import {
  generate,
  getSecondaryColor,
  isIconDefinition,
  log,
} from '../utils';

export interface IconProps {
  type?: string ;
  icon: IconDefinition;
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
      icon,
      className,
      onClick,
      style,
      primaryColor,
      secondaryColor,
      ...rest
    } = this.props;

    let target = icon;
    let colors: TwoToneColorPalette = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    if (!isIconDefinition(icon)) {
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
