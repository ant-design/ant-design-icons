// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MergeFilledSvg from '@ant-design/icons-svg/lib/asn/MergeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MergeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MergeFilled: MergeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MergeFilledSvg}></AntdIcon>;
};

MergeFilled.displayName = 'MergeFilled';
MergeFilled.inheritAttrs = false;
export default MergeFilled;