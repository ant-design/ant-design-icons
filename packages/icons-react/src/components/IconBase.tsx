import * as React from 'react';
import { AbstractNode, IconDefinition } from '@ant-design/icons/lib/types';
import {
  generate,
  getSecondaryColor,
  isIconDefinition,
  log,
} from '../utils';

export interface IconProps {
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
  secondaryColor: '#E6E6E6',
};

class Icon extends React.Component<IconProps> {
  static displayName = 'IconReact';

  static setTwoToneColors({
    primaryColor,
    secondaryColor,
  }: TwoToneColorPaletteSetter) {
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor =
      secondaryColor || getSecondaryColor(primaryColor);
  }

  static getTwoToneColors(): TwoToneColorPalette {
    return {
      ...twoToneColorPalette,
    };
  }

  render() {
    const {
      icon,
      className,
      onClick,
      style,
      primaryColor,
      secondaryColor,
      ...restProps
    } = this.props;

    let colors: TwoToneColorPalette = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
      };
    }
    if (!isIconDefinition(icon)) {
      log(`icon should be icon definiton, but got ${icon}`);
      return null;
    }
    let target = icon;
    if (target && typeof target.icon === 'function') {
      target = {
        ...target,
        icon: target.icon(colors.primaryColor, colors.secondaryColor),
      };
    }
    return generate(target.icon as AbstractNode, `svg-${target.name}`, {
      className,
      onClick,
      style,
      'data-icon': target.name,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      'aria-hidden': 'true',
      ...restProps,
    });
  }
}

export default Icon;
