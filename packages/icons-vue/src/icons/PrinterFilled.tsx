// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterFilledSvg}></AntdIcon>;
};

PrinterFilled.displayName = 'PrinterFilled';
PrinterFilled.inheritAttrs = false;
export default PrinterFilled;