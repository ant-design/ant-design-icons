// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScheduleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScheduleOutlined: ScheduleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScheduleOutlinedSvg}></AntdIcon>;
};

ScheduleOutlined.displayName = 'ScheduleOutlined';
ScheduleOutlined.inheritAttrs = false;
export default ScheduleOutlined;