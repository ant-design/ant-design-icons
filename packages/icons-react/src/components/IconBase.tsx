import * as React from 'react';
import type { AbstractNode, IconDefinition } from '@ant-design/icons-svg/lib/types';
import { generate, isIconDefinition, warning, useInsertStyles } from '../utils';

export interface IconProps {
  icon: IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
  focusable?: string;
}

const IconBase: React.FC<IconProps> = props => {
  const { icon, className, onClick, style, ...restProps } = props;

  const svgRef = React.useRef<HTMLElement>(null);

  delete restProps.primaryColor;
  delete restProps.secondaryColor;

  useInsertStyles(svgRef);

  warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);

  if (!isIconDefinition(icon)) {
    return null;
  }

  const target = icon;

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

IconBase.displayName = 'IconReact';

export default IconBase;
