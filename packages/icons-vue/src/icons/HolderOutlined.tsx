// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/HolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HolderOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HolderOutlined: HolderOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HolderOutlinedSvg}></AntdIcon>;
};

HolderOutlined.displayName = 'HolderOutlined';
HolderOutlined.inheritAttrs = false;
export default HolderOutlined;