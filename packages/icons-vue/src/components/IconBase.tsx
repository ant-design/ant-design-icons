import { generate, getSecondaryColor, isIconDefinition, warning } from '../utils';
import { AbstractNode, IconDefinition } from '@ant-design/icons-svg/lib/types';
import { CSSProperties, FunctionalComponent, PropType, reactive } from 'vue';

export interface IconProps {
  icon: IconDefinition;
  class?: string;
  onClick?: (e?: Event) => void;
  style?: CSSProperties;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
  focusable?: string;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean; // marker for calculation
}

const twoToneColorPalette: TwoToneColorPalette = reactive({
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
});

function setTwoToneColors({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter): void {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors(): TwoToneColorPalette {
  return {
    ...twoToneColorPalette,
  };
}

interface Color {
  getTwoToneColors: () => TwoToneColorPalette;
  setTwoToneColors: (twoToneColors: TwoToneColorPaletteSetter) => void;
}

export interface IconBaseType extends Color, FunctionalComponent<IconProps> {
  displayName: string;
}
const IconBase: IconBaseType = (props, context) => {
  const { icon, primaryColor, secondaryColor, ...restProps } = {
    ...props,
    ...context.attrs,
  } as any;

  let colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }
  warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);

  if (!isIconDefinition(icon)) {
    return null;
  }

  let target = icon;
  if (target && typeof target.icon === 'function') {
    target = {
      ...target,
      icon: target.icon(colors.primaryColor, colors.secondaryColor),
    };
  }

  return generate(target.icon as AbstractNode, `svg-${target.name}`, {
    ...restProps,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
  });
  // },
};

IconBase.props = {
  icon: Object as PropType<IconDefinition>,
  primaryColor: String as PropType<string>,
  secondaryColor: String as PropType<string>,
  focusable: String as PropType<string>,
};
IconBase.inheritAttrs = false;
IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

export default IconBase;
