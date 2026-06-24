'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import type { IconDefinition } from '@ant-design/icons-svg/lib/types';

import Context from './Context';
import type { IconBaseProps } from './Icon';
import ReactIcon from './IconBase';
import type { TwoToneColor } from './twoTonePrimaryColor';

export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export interface IconComponentProps extends AntdIconProps {
  icon: IconDefinition;
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
  const {
    // affect outter <i>...</i>
    className,

    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,

    tabIndex,
    onClick,

    twoToneColor: _twoToneColor,

    // other
    ...restProps
  } = props;

  const { prefixCls = 'anticon', rootClassName } = React.useContext(Context);

  const classString = clsx(
    rootClassName,
    prefixCls,
    {
      [`${prefixCls}-${icon.name}`]: !!icon.name,
      [`${prefixCls}-spin`]: !!spin || icon.name === 'loading',
    },
    className,
  );

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  const svgStyle: React.CSSProperties = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;

  return (
    <span
      role="img"
      aria-label={icon.name}
      {...restProps}
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
      <ReactIcon icon={icon} style={svgStyle} />
    </span>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Icon.displayName = 'AntdIcon';
}

export default Icon;
