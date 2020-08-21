// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeOutlinedSvg}></AntdIcon>;
};

BarcodeOutlined.displayName = 'BarcodeOutlined';
BarcodeOutlined.inheritAttrs = false;
export default BarcodeOutlined;