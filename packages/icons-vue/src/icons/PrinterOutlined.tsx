// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PrinterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterOutlined: PrinterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterOutlinedSvg}></AntdIcon>;
};

PrinterOutlined.displayName = 'PrinterOutlined';
PrinterOutlined.inheritAttrs = false;
export default PrinterOutlined;