// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/MutedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MutedOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MutedOutlined: MutedOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MutedOutlinedSvg}></AntdIcon>;
};

MutedOutlined.displayName = 'MutedOutlined';
MutedOutlined.inheritAttrs = false;
export default MutedOutlined;