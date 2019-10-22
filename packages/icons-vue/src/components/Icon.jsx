import { svgBaseProps, warning, useInsertStyles, noop } from "../utils";

const Icon = {
  name: "AntdIcon",
  functional: true,
  props: ["component", "spin", "rotate", "tabIndex"],
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
    warning(
      Boolean(Component || children),
      "Should have `component` prop or `default slot`."
    );

    useInsertStyles();

    const classString = "anticon";

    const svgClassString = {
      "anticon-spin": !!spin,
    };

    let innerNode;
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
        return <Component {...innerSvgProps}>{children}</Component>;
      }

      if (children) {
        // warning(
        //   Boolean(viewBox) ||
        //     (React.Children.count(children) === 1 &&
        //       React.isValidElement(children) &&
        //       React.Children.only(children).type === "use"),
        //   "Make sure that you provide correct `viewBox`" +
        //     " prop (default `0 0 1024 1024`) to the icon."
        // );

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
