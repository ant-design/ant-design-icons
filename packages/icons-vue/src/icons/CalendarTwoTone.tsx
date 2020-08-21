// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTwoToneSvg}></AntdIcon>;
};

CalendarTwoTone.displayName = 'CalendarTwoTone';
CalendarTwoTone.inheritAttrs = false;
export default CalendarTwoTone;