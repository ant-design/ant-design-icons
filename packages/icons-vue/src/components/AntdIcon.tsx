import VueIcon from './IconBase';
import { IconBaseProps } from './Icon';
import { IconDefinition } from '@ant-design/icons-svg/lib/types';
import { getTwoToneColor, TwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';
import { FunctionalComponent, PropType } from 'vue';
import { blue } from '@ant-design/colors';
import { useInjectIconContext } from './Context';
import { InsertStyles } from './InsertStyle';

export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export interface IconComponentProps extends AntdIconProps {
  icon: IconDefinition;
}
interface Color {
  getTwoToneColor: () => TwoToneColor;
  setTwoToneColor: (twoToneColor: TwoToneColor) => void;
}
export interface AntdIconType extends Color, FunctionalComponent<IconComponentProps> {
  displayName: string;
}

// Initial setting
setTwoToneColor(blue.primary);

const Icon: AntdIconType = (props, context) => {
  const {
    class: cls,
    icon,
    spin,
    rotate,
    tabindex,
    // other
    twoToneColor,
    onClick,
    ...restProps
  } = { ...props, ...context.attrs } as any;
  const { prefixCls, rootClassName } = useInjectIconContext();
  const classObj = {
    [rootClassName.value]: !!rootClassName.value,
    [prefixCls.value]: true,
    [`${prefixCls.value}-${icon.name}`]: Boolean(icon.name),
    [`${prefixCls.value}-spin`]: !!spin || icon.name === 'loading',
  };

  let iconTabIndex = tabindex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

  return (
    <span
      role="img"
      aria-label={icon.name}
      {...restProps}
      onClick={onClick}
      class={[classObj, cls]}
      tabindex={iconTabIndex}
    >
      <VueIcon
        icon={icon}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        style={svgStyle}
      />
      <InsertStyles></InsertStyles>
    </span>
  );
};

Icon.props = {
  spin: Boolean as PropType<boolean>,
  rotate: Number as PropType<number>,
  icon: Object as PropType<IconDefinition>,
  twoToneColor: [String, Array] as PropType<TwoToneColor>,
};
Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
