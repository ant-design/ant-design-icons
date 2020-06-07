import classNames from 'classnames';
import VueIcon from './IconBase';
import { setTwoToneColor, getTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';

// Initial setting
setTwoToneColor('#1890ff');

const Icon = (_, { attrs }) => {
  // props: {
  //   icon: Object,
  //   spin: Boolean,
  //   rotate: Number,
  //   tabIndex: [String, Number],
  //   twoToneColor: [String, Array],
  // },
  const {
    // affect inner <svg>...</svg>
    class: cls,
    icon,
    spin,
    rotate,
    tabIndex,
    // other
    twoToneColor,
    onClick,
    ...restProps
  } = attrs;
  const classString = classNames('anticon', {
    [`anticon-${icon.name}`]: Boolean(icon.name),
    [cls]: cls,
  });

  const svgClassString = classNames({
    'anticon-spin': !!spin || icon.name === 'loading',
  });

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
    restProps.tabIndex = iconTabIndex;
  }

  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

  return (
    <span role="img" aria-label={icon.name} {...restProps} onClick={onClick} class={classString}>
      <VueIcon
        class={svgClassString}
        icon={icon}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        style={svgStyle}
      />
    </span>
  );
};

// Icon.name = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
