import {
  AbstractNodeAndIconName,
  IconDefinitionBase
} from '../plugins/icon-definition';
import {
  oldIconNames,
  twoToneColors,
  twoToneIdentifiers,
  vueLikeQuoteInterpolate
} from './constants';
import { template } from 'lodash';

let count = 0;

/**
 * focusable: 'false'
 */
export function iconShouldNotBeFocusable({
  abstractNode,
  iconName
}: AbstractNodeAndIconName): AbstractNodeAndIconName {
  if (abstractNode.tag === 'svg') {
    // make it immutable!
    abstractNode = {
      ...abstractNode,
      attrs: {
        ...abstractNode.attrs,
        focusable: 'false'
      }
    };
  }

  return {
    abstractNode,
    iconName
  };
}

/**
 * account-book(>= 3.9):
 * viewBox: '64 64 896 896'
 *
 * loading(< 3.9):
 * viewBox: '0 0 1024 1024'
 */
export function iconsAfter3Dot9ShouldBeResizeViewbox({
  abstractNode,
  iconName
}: AbstractNodeAndIconName): AbstractNodeAndIconName {
  if (abstractNode.tag === 'svg' && !oldIconNames.includes(iconName)) {
    // make it immutable!
    abstractNode = {
      ...abstractNode,
      attrs: {
        ...abstractNode.attrs,
        viewBox: '64 64 896 896'
      }
    };
  }
  return {
    abstractNode,
    iconName
  };
}

const { primaryColor, secondaryColor } = twoToneIdentifiers;
export function twoToneIconExtractColor({
  abstractNode,
  iconName
}: AbstractNodeAndIconName): AbstractNodeAndIconName {
  if (abstractNode.tag === 'path') {
    const isSecondaryColor = twoToneColors.secondary.includes(
      abstractNode.attrs.fill
    );
    abstractNode.attrs.fill = isSecondaryColor
      ? `{{ ${secondaryColor} }}`
      : `{{ ${primaryColor} }}`;
  }
  return {
    abstractNode,
    iconName
  };
}

export function twoToneStringfy(
  iconDefinitionBase: IconDefinitionBase
): string {
  const abstractNode = iconDefinitionBase.icon;
  const literalAbstractNode = template(JSON.stringify(abstractNode), {
    interpolate: vueLikeQuoteInterpolate
  })({
    [primaryColor]: primaryColor,
    [secondaryColor]: secondaryColor
  });
  const fnCode = `function (${primaryColor}, ${secondaryColor}) {
      return ${literalAbstractNode};
    }`;
  const iconDefinitionBaseWithRawFunction = JSON.stringify({
    ...iconDefinitionBase,
    icon: '{{ fnCode }}'
  });
  return template(iconDefinitionBaseWithRawFunction, {
    interpolate: vueLikeQuoteInterpolate
  })({ fnCode });
}
