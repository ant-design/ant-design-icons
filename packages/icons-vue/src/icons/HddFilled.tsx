// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HddFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HddFilledSvg}></AntdIcon>;
};

HddFilled.displayName = 'HddFilled';
HddFilled.inheritAttrs = false;
export default HddFilled;