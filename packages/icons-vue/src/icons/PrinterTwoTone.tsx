// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterTwoTone: PrinterTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterTwoToneSvg}></AntdIcon>;
};

PrinterTwoTone.displayName = 'PrinterTwoTone';
PrinterTwoTone.inheritAttrs = false;
export default PrinterTwoTone;