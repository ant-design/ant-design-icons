import {
  AbstractNodeAndIconName,
  IconDefinitionBase
} from '../plugins/icon-definition';
import {
  oldIcons,
  twoToneColors,
  twoToneIdentifiers,
  vueLikeQuoteInterpolate
} from './constants';
import { template } from 'lodash';

const { primaryColor, secondaryColor } = twoToneIdentifiers;

export function iconShouldNotBeFocusable({
  abstractNode,
  iconName
}: AbstractNodeAndIconName): AbstractNodeAndIconName {
  if (abstractNode.tag === 'svg') {
    abstractNode.attrs.focusable = 'false';
  }
  return {
    abstractNode,
    iconName
  };
}

export function iconsAfter3Dot9ShouldBeResizeViewbox({
  abstractNode,
  iconName
}: AbstractNodeAndIconName): AbstractNodeAndIconName {
  if (abstractNode.tag === 'svg' && !oldIcons.includes(iconName)) {
    abstractNode.attrs.viewBox = '64 64 896 896';
  }
  return {
    abstractNode,
    iconName
  };
}

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
