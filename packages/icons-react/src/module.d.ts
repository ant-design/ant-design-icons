declare module '@ant-design/colors' {
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
