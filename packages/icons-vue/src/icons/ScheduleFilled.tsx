// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScheduleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScheduleFilledSvg}></AntdIcon>;
};

ScheduleFilled.displayName = 'ScheduleFilled';
ScheduleFilled.inheritAttrs = false;
export default ScheduleFilled;