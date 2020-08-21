// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScheduleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScheduleOutlinedSvg}></AntdIcon>;
};

ScheduleOutlined.displayName = 'ScheduleOutlined';
ScheduleOutlined.inheritAttrs = false;
export default ScheduleOutlined;