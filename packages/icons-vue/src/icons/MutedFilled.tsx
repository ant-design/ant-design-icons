// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MutedFilledSvg from '@ant-design/icons-svg/lib/asn/MutedFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MutedFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MutedFilled: MutedFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MutedFilledSvg}></AntdIcon>;
};

MutedFilled.displayName = 'MutedFilled';
MutedFilled.inheritAttrs = false;
export default MutedFilled;