// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarcodeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarcodeOutlined: BarcodeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeOutlinedSvg}></AntdIcon>;
};

BarcodeOutlined.displayName = 'BarcodeOutlined';
BarcodeOutlined.inheritAttrs = false;
export default BarcodeOutlined;