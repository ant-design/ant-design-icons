import { svgBaseProps, warning } from '../utils';
import { Component, FunctionalComponent, HTMLAttributes, PropType } from 'vue';
import { useInjectIconContext } from './Context';
import { InsertStyles } from './InsertStyle';

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
export interface IconType extends FunctionalComponent<IconComponentProps> {
  displayName: string;
}
const Icon: IconType = (props, context) => {
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
  const { prefixCls, rootClassName } = useInjectIconContext();
  const children = slots.default && slots.default();
  const hasChildren = children && children.length;
  const slotsComponent = slots.component;
  warning(
    Boolean(Component || hasChildren || slotsComponent),
    'Should have `component` prop/slot or `children`.',
  );

  const classString = {
    [rootClassName.value]: !!rootClassName.value,
    [prefixCls.value]: true,
  };

  const svgClassString = {
    [`${prefixCls.value}-spin`]: spin === '' || !!spin,
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
    if (slotsComponent) {
      return slotsComponent(innerSvgProps);
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
    <span role="img" {...restProps} onClick={onClick} class={[classString, cls]}>
      {renderInnerNode()}
      <InsertStyles></InsertStyles>
    </span>
  );
};
Icon.props = {
  spin: Boolean as PropType<boolean>,
  rotate: Number as PropType<number>,
  viewBox: String as PropType<string>,
  ariaLabel: String as PropType<string>,
};
Icon.inheritAttrs = false;
Icon.displayName = 'Icon';

export default Icon;
