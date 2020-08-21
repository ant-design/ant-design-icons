// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterTwoToneSvg}></AntdIcon>;
};

PrinterTwoTone.displayName = 'PrinterTwoTone';
PrinterTwoTone.inheritAttrs = false;
export default PrinterTwoTone;