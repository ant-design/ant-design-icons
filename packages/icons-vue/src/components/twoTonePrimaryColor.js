import VueIcon from './IconBase';

export function setTwoToneColor(primaryColor) {
  return VueIcon.setTwoToneColors({
    primaryColor,
  });
}

export function getTwoToneColor() {
  const colors = VueIcon.getTwoToneColors();
  return colors.primaryColor;
}
