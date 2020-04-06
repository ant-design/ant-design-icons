import VueIcon from './IconBase';
import { normalizeTwoToneColors } from '../utils';

export function setTwoToneColor(twoToneColor) {
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);
  return VueIcon.setTwoToneColors({
    primaryColor,
    secondaryColor,
  });
}

export function getTwoToneColor() {
  const colors = VueIcon.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
