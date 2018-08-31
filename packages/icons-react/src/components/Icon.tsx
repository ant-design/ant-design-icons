import {
  IconDefinition,
  IconDefinitionGetter
} from '@ant-design/icons/lib/types';
import * as React from 'react';
import {
  generate,
  getIconNameAccordingToSuffix,
  getSecondaryColor,
  isIconDefinition,
  isIconDefinitionGetter,
  log,
  MiniMap
} from '../utils';

export interface IconProps {
  type: string | IconDefinition | IconDefinitionGetter;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
}

export interface TwoToneColorPalette {
  primaryColor: string;
  secondaryColor: string;
}

const twoToneColorPalette: TwoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6'
};

class Icon extends React.Component<IconProps> {
  static displayName = 'IconReact';
  static definitions = new MiniMap<IconDefinition>();
  static add(...icons: IconDefinition[]) {
    icons.forEach((icon) => {
      this.definitions.set(icon.nameWithTheme, icon);
    });
  }
  static clear() {
    this.definitions.clear();
  }

  static get(key?: string, colors: TwoToneColorPalette = twoToneColorPalette) {
    if (key) {
      let result = this.definitions.get(key);
      if (isIconDefinitionGetter(result)) {
        result = result(colors.primaryColor, colors.secondaryColor);
      }
      return result;
    }
  }

  static setTwoTonePrimaryColor(primaryColor: string, secondaryColor?: string) {
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor =
      secondaryColor || getSecondaryColor(primaryColor);
  }

  static getTwoTonePrimaryColor() {
    return twoToneColorPalette.primaryColor;
  }

  render() {
    const {
      type,
      className,
      onClick,
      style,
      primaryColor,
      secondaryColor
    } = this.props;

    let target: IconDefinition | undefined;
    let colors: TwoToneColorPalette = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    if (isIconDefinition(type)) {
      target = type;
    } else if (isIconDefinitionGetter(type)) {
      target = type(colors.primaryColor, colors.secondaryColor);
    } else if (typeof type === 'string') {
      target = Icon.get(getIconNameAccordingToSuffix(type), colors);
      if (!target) {
        log(`Could not find icon: ${type}`);
        return null;
      }
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`);
      return null;
    }
    return generate(target, `svg-${target.name}`, {
      className,
      onClick,
      style,
      ['data-icon']: target.name,
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      ['aria-hidden']: 'true'
    });
  }
}

export default Icon;
