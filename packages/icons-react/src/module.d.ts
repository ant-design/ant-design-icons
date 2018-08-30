declare module 'ant-design-palettes' {
  type ColorPalettes = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  export function generate(color: string): ColorPalettes;
}
