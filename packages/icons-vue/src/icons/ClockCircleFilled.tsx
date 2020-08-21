// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClockCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ClockCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockCircleFilledSvg}></AntdIcon>;
};

ClockCircleFilled.displayName = 'ClockCircleFilled';
ClockCircleFilled.inheritAttrs = false;
export default ClockCircleFilled;