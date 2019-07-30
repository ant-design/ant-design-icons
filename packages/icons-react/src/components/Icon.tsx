import * as React from 'react';
import classNames from 'classnames';

import { svgBaseProps, log } from '../utils';

export interface IconBaseProps {
  tabIndex?: number;
  className?: string;
  title?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
  role?: string;
  spin?: boolean;
  rotate?: number;
}

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  component?: React.ComponentType<CustomIconComponentProps>;
  ariaLabel?: React.AriaAttributes['aria-label'];
}

const Icon: React.FC<IconComponentProps> = props => {
  const {
    // affect outter <i>...</i>
    className,

    // affect inner <svg>...</svg>
    component: Component,
    viewBox,
    spin,
    rotate,

    tabIndex,
    onClick,

    // children
    children,
    ...restProps
  } = props;

  if (!(Component || children)) {
    log('Should have `type` prop or `component` prop or `children`.');
  }

  const classString = classNames(
    'anticon',
    className,
  );

  const svgClassString = classNames({
    'anticon-spin': !!spin,
  });

  let innerNode: React.ReactNode;
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

  // component > children
  if (Component) {
    innerNode = <Component {...innerSvgProps}>{children}</Component>;
  }

  if (children) {
    if (
      !viewBox ||
      !(React.Children.count(children) === 1 &&
      React.isValidElement(children) &&
      React.Children.only(children).type === 'use')
    ) {
      log(
        'Make sure that you provide correct `viewBox`' +
        ' prop (default `0 0 1024 1024`) to the icon.',
      );
    }

    innerNode = (
      <svg {...innerSvgProps} viewBox={viewBox}>
        {children}
      </svg>
    );
  }

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return (
    <span
      role="img"
      {...restProps}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
      {innerNode}
    </span>
  );
}

Icon.displayName = 'AntdIcon';

export default Icon;
