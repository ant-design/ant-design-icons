// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MergeOutlinedSvg from '@ant-design/icons-svg/lib/asn/MergeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MergeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MergeOutlined: MergeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MergeOutlinedSvg}></AntdIcon>;
};

MergeOutlined.displayName = 'MergeOutlined';
MergeOutlined.inheritAttrs = false;
export default MergeOutlined;