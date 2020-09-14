// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarFilledSvg from '@ant-design/icons-svg/lib/asn/CalendarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarFilledSvg}></AntdIcon>;
};

CalendarFilled.displayName = 'CalendarFilled';
CalendarFilled.inheritAttrs = false;
export default CalendarFilled;