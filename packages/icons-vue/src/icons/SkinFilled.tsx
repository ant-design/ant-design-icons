// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkinFilledSvg}></AntdIcon>;
};

SkinFilled.displayName = 'SkinFilled';
SkinFilled.inheritAttrs = false;
export default SkinFilled;