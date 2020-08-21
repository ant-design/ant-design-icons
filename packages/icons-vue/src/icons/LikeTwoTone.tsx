// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTwoToneSvg}></AntdIcon>;
};

LikeTwoTone.displayName = 'LikeTwoTone';
LikeTwoTone.inheritAttrs = false;
export default LikeTwoTone;