// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LaptopOutlinedSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LaptopOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LaptopOutlined: LaptopOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LaptopOutlinedSvg}></AntdIcon>;
};

LaptopOutlined.displayName = 'LaptopOutlined';
LaptopOutlined.inheritAttrs = false;
export default LaptopOutlined;