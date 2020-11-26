// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanOutlined: ScanOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanOutlinedSvg}></AntdIcon>;
};

ScanOutlined.displayName = 'ScanOutlined';
ScanOutlined.inheritAttrs = false;
export default ScanOutlined;