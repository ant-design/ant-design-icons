import { svgBaseProps, warning, useInsertStyles } from '../utils';
import { Component, HTMLAttributes, SetupContext } from 'vue';

export interface IconBaseProps extends HTMLAttributes {
  spin?: boolean;
  rotate?: number;
}
export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
}
export interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  component?: Component;
  ariaLabel?: string;
}
const Icon = (props: IconComponentProps, context: SetupContext) => {
  // props: {
  //   component: [Object, Function],
  //   spin: Boolean,
  //   rotate: Number,
  //   tabindex: [String, Number],
  // },
  const { attrs, slots } = context;
  const {
    class: cls,
    // affect inner <svg>...</svg>
    component: Component,
    viewBox,
    spin,
    rotate,
    tabindex,
    onClick,
    ...restProps
  } = { ...props, ...attrs } as any;
  const children = slots.default && slots.default();
  const hasChildren = children && children.length;
  warning(Boolean(Component || hasChildren), 'Should have `component` prop or `children`.');

  useInsertStyles();

  const classString = {
    anticon: true,
    [cls]: cls,
  };

  const svgClassString = {
    'anticon-spin': spin === '' || !!spin,
  };
  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;

  const innerSvgProps = {
    ...svgBaseProps,
    viewBox,
    class: svgClassString,
    style: svgStyle,
  };

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }
  const renderInnerNode = () => {
    if (Component) {
      return <Component {...innerSvgProps}>{children}</Component>;
    }
    if (hasChildren) {
      warning(
        Boolean(viewBox) || (children.length === 1 && children[0] && children[0].type === 'use'),
        'Make sure that you provide correct `viewBox`' +
          ' prop (default `0 0 1024 1024`) to the icon.',
      );

      return (
        <svg {...innerSvgProps} viewBox={viewBox}>
          {children}
        </svg>
      );
    }
    return null;
  };

  let iconTabIndex = tabindex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
    restProps.tabindex = iconTabIndex;
  }

  return (
    <span role="img" {...restProps} onClick={onClick} class={classString}>
      {renderInnerNode()}
    </span>
  );
};

Icon.inheritAttrs = false;

export default Icon;
