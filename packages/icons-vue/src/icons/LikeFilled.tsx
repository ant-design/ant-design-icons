// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeFilledSvg from '@ant-design/icons-svg/lib/asn/LikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeFilled: LikeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeFilledSvg}></AntdIcon>;
};

LikeFilled.displayName = 'LikeFilled';
LikeFilled.inheritAttrs = false;
export default LikeFilled;