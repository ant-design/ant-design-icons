// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScheduleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScheduleFilled: ScheduleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScheduleFilledSvg}></AntdIcon>;
};

ScheduleFilled.displayName = 'ScheduleFilled';
ScheduleFilled.inheritAttrs = false;
export default ScheduleFilled;