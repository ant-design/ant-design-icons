// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LikeFilledSvg from '@ant-design/icons-svg/lib/asn/LikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeFilledSvg}></AntdIcon>;
};

LikeFilled.displayName = 'LikeFilled';
LikeFilled.inheritAttrs = false;
export default LikeFilled;