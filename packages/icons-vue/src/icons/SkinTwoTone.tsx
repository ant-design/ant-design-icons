// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkinTwoToneSvg from '@ant-design/icons-svg/lib/asn/SkinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkinTwoToneSvg}></AntdIcon>;
};

SkinTwoTone.displayName = 'SkinTwoTone';
SkinTwoTone.inheritAttrs = false;
export default SkinTwoTone;