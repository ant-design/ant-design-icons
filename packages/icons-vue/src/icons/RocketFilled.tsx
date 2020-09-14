// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RocketFilledSvg from '@ant-design/icons-svg/lib/asn/RocketFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RocketFilledSvg}></AntdIcon>;
};

RocketFilled.displayName = 'RocketFilled';
RocketFilled.inheritAttrs = false;
export default RocketFilled;