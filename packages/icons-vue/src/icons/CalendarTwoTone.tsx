// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarTwoTone: CalendarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTwoToneSvg}></AntdIcon>;
};

CalendarTwoTone.displayName = 'CalendarTwoTone';
CalendarTwoTone.inheritAttrs = false;
export default CalendarTwoTone;