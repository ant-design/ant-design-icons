// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopFilledSvg}></AntdIcon>;
};

StopFilled.displayName = 'StopFilled';
StopFilled.inheritAttrs = false;
export default StopFilled;