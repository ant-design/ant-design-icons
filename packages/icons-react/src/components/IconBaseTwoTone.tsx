import * as React from 'react';
import type { AbstractNode } from '@ant-design/icons-svg/lib/types';
import type { IconProps } from './IconBase';
import { getSecondaryColor } from '../colorUtils';
import { generate, isIconDefinition, warning, useInsertStyles } from '../utils';

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean; // marker for calculation
}

const twoToneColorPalette: TwoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors(): TwoToneColorPalette {
  return {
    ...twoToneColorPalette,
  };
}

interface IconBaseTwoToneComponent<P> extends React.FC<P> {
  getTwoToneColors: typeof getTwoToneColors;
  setTwoToneColors: typeof setTwoToneColors;
}

const IconBaseTwoTone: IconBaseTwoToneComponent<IconProps> = props => {
  const { icon, className, onClick, style, primaryColor, secondaryColor, ...restProps } = props;

  const svgRef = React.useRef<HTMLElement>(null);

  let colors: TwoToneColorPalette = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }

  useInsertStyles(svgRef);

  warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);

  if (!isIconDefinition(icon)) {
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
    ref: svgRef,
  });
};

IconBaseTwoTone.displayName = 'IconReact';
IconBaseTwoTone.getTwoToneColors = getTwoToneColors;
IconBaseTwoTone.setTwoToneColors = setTwoToneColors;

export default IconBaseTwoTone;
