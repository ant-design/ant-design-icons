// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarOutlined: CalendarOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarOutlinedSvg}></AntdIcon>;
};

CalendarOutlined.displayName = 'CalendarOutlined';
CalendarOutlined.inheritAttrs = false;
export default CalendarOutlined;