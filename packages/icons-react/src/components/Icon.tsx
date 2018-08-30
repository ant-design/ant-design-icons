import {
  IconDefinition,
  IconDefinitionGetter
} from '@ant-design/icons/lib/types';
import { generate as generateColor } from 'ant-design-palettes';
import * as React from 'react';
import {
  generate,
  getIconNameAccordingToSuffix,
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
}

const twoToneColorPalette = {
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
  static get(key?: string) {
    if (key) {
      let result = this.definitions.get(key);
      if (isIconDefinitionGetter(result)) {
        result = result(
          twoToneColorPalette.primaryColor,
          twoToneColorPalette.secondaryColor
        );
      }
      return result;
    }
  }

  static setTwoTonePrimaryColor(primaryColor: string) {
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = generateColor(
      twoToneColorPalette.primaryColor
    )[1]; // choose the second color
  }

  render() {
    const { type, className, onClick, style } = this.props;

    let target: IconDefinition | undefined;
    if (isIconDefinition(type)) {
      target = type;
    } else if (isIconDefinitionGetter(type)) {
      target = type(
        twoToneColorPalette.primaryColor,
        twoToneColorPalette.secondaryColor
      );
    } else if (typeof type === 'string') {
      target = Icon.get(getIconNameAccordingToSuffix(type));
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
