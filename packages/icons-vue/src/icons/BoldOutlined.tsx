// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoldOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoldOutlined: BoldOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoldOutlinedSvg}></AntdIcon>;
};

BoldOutlined.displayName = 'BoldOutlined';
BoldOutlined.inheritAttrs = false;
export default BoldOutlined;