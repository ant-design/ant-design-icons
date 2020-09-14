// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HourglassFilledSvg}></AntdIcon>;
};

HourglassFilled.displayName = 'HourglassFilled';
HourglassFilled.inheritAttrs = false;
export default HourglassFilled;