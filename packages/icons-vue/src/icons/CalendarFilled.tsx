// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarFilledSvg from '@ant-design/icons-svg/lib/asn/CalendarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarFilled: CalendarFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarFilledSvg}></AntdIcon>;
};

CalendarFilled.displayName = 'CalendarFilled';
CalendarFilled.inheritAttrs = false;
export default CalendarFilled;