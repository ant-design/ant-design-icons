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
import { template, upperFirst, camelCase, memoize } from 'lodash';
import { ThemeTypeUpperCase, ThemeType } from './templates/types';

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
  if (abstractNode.tag === 'svg' && !oldIconNames.includes(iconName)) {
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

export const getIdentifier = memoize(function getIdentifier({
  name,
  themeSuffix
}: {
  name: string;
  themeSuffix: ThemeTypeUpperCase;
}): string {
  return upperFirst(camelCase(`${name}-${themeSuffix}`));
});

export function getSrcByTheme(theme: ThemeType): string {
  return `src/${theme}/*.svg`;
}

export function getDocsInlinePathByTheme(theme: ThemeType): string {
  return `docs/inline-svg/${theme}`;
}

export function getInlinePathByTheme(theme: ThemeType): string {
  return `inline-svg/${theme}`;
}

export {
  renderIconDefinitionToSVGElement,
  HelperRenderOptions
} from './templates/helpers';
