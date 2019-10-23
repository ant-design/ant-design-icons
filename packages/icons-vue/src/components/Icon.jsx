import { svgBaseProps, warning, useInsertStyles } from '../utils';

const Icon = {
  name: 'AntdIcon',
  functional: true,
  props: ['component', 'spin', 'rotate', 'tabIndex'],
  render(h, ctx) {
    const { data: { attrs, ...restData } = {}, props = {}, listeners, children } = ctx;
    const {
      // affect inner <svg>...</svg>
      component: Component,
      viewBox,
      spin,
      rotate,
      tabIndex,
      ...restProps
    } = { ...attrs, ...props };
    const { click: onClick } = listeners;
    const hasChildren = children && children.length;
    warning(Boolean(Component || hasChildren), 'Should have `component` prop or `children`.');

    useInsertStyles();

    const classString = 'anticon';

    const svgClassString = {
      'anticon-spin': !!spin,
    };
    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;

    const innerSvgProps = {
      attrs: { ...svgBaseProps, viewBox },
      class: svgClassString,
      style: svgStyle,
    };

    if (!viewBox) {
      delete innerSvgProps.attrs.viewBox;
    }
    const renderInnerNode = () => {
      // component > children
      if (Component) {
        return typeof Component === 'function' ? (
          Component(h, { ...innerSvgProps, children })
        ) : (
          <Component {...innerSvgProps}>{children}</Component>
        );
      }
      if (hasChildren) {
        warning(
          Boolean(viewBox) || (children.length === 1 && children[0] && children[0].tag === 'use'),
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

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    return (
      <span
        role="img"
        tabIndex={iconTabIndex}
        class={classString}
        {...{ ...restData, attrs: restProps, on: listeners }}
      >
        {renderInnerNode()}
      </span>
    );
  },
};

export default Icon;
