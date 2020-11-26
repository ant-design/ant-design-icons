// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterFilled: PrinterFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterFilledSvg}></AntdIcon>;
};

PrinterFilled.displayName = 'PrinterFilled';
PrinterFilled.inheritAttrs = false;
export default PrinterFilled;