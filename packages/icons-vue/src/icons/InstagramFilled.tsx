// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramFilledSvg}></AntdIcon>;
};

InstagramFilled.displayName = 'InstagramFilled';
InstagramFilled.inheritAttrs = false;
export default InstagramFilled;