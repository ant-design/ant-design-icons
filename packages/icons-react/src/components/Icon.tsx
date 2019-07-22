import * as React from 'react';
import classNames from 'classnames';
import { IconDefinition } from '@ant-design/icons/lib/types';

import ReactIcon from './IconBase';
import { svgBaseProps } from '../utils';

export interface TransferLocale {
  icon: string;
}

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
  spin?: boolean;
  rotate?: number;
  ['aria-hidden']?: React.AriaAttributes['aria-hidden'];
}

export type ThemeType = 'filled' | 'outlined' | 'twoTone';

export interface IconProps {
  icon: IconDefinition;
  tabIndex?: number;
  className?: string;
  theme?: ThemeType;
  title?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  twoToneColor?: string;
  viewBox?: string;
  spin?: boolean;
  rotate?: number;
  style?: React.CSSProperties;
  prefixCls?: string;
  role?: string;
}

class Icon extends React.Component<IconProps> {
  static displayName = 'AntdIcon';

  render() {
    const {
      // affect outter <i>...</i>
      className,

      // affect inner <svg>...</svg>
      icon,
      viewBox,
      spin,
      rotate,

      tabIndex,
      onClick,

      // other
      theme, // default to outlined
      twoToneColor,

      ...restProps
    } = this.props;

    const classString = classNames(
      {
        [`anticon`]: true,
        [`anticon-${icon.name}`]: Boolean(icon.name),
      },
      className,
    );

    const svgClassString = classNames({
      [`anticon-spin`]: !!spin || icon.name === 'loading',
    });

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;

    const innerSvgProps: CustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString,
      style: svgStyle,
      viewBox,
    };

    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    return (
      <span
        role="img"
        aria-label={icon.name}
        {...restProps}
        tabIndex={iconTabIndex}
        onClick={onClick}
        className={classString}
      >
        <ReactIcon
          className={svgClassString}
          icon={icon}
          primaryColor={twoToneColor}
          style={svgStyle}
        />
      </span>
    );
  }
}

export default Icon;
