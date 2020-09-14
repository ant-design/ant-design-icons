// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartFilledSvg from '@ant-design/icons-svg/lib/asn/HeartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartFilledSvg}></AntdIcon>;
};

HeartFilled.displayName = 'HeartFilled';
HeartFilled.inheritAttrs = false;
export default HeartFilled;