import generateColor from '@ant-design/colors/es/generate';

export function getSecondaryColor(primaryColor: string): string {
  // choose the second color
  return generateColor(primaryColor)[0];
}
