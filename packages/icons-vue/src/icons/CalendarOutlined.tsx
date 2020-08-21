// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarOutlinedSvg}></AntdIcon>;
};

CalendarOutlined.displayName = 'CalendarOutlined';
CalendarOutlined.inheritAttrs = false;
export default CalendarOutlined;