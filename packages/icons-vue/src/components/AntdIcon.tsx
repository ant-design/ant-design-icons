import classNames from 'classnames';
import VueIcon from './IconBase';
import { IconBaseProps } from './Icon';
import { IconDefinition } from '@ant-design/icons-svg/lib/types';
import { getTwoToneColor, TwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';

export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export interface IconComponentProps extends AntdIconProps {
  icon: IconDefinition;
}

// Initial setting
setTwoToneColor('#1890ff');

const Icon = (props: IconComponentProps, { attrs }) => {
  // props: {
  //   icon: Object,
  //   spin: Boolean,
  //   rotate: Number,
  //   tabindex: [String, Number],
  //   twoToneColor: [String, Array],
  // },
  const {
    // affect inner <svg>...</svg>
    class: cls,
    icon,
    spin,
    rotate,
    tabindex,
    // other
    twoToneColor,
    onClick,
    ...restProps
  } = { ...props, ...attrs } as any;
  const classString = classNames('anticon', {
    [`anticon-${icon.name}`]: Boolean(icon.name),
    [cls]: cls,
  });

  const svgClassString = classNames({
    'anticon-spin': !!spin || icon.name === 'loading',
  });

  let iconTabIndex = tabindex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
    restProps.tabindex = iconTabIndex;
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

Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
