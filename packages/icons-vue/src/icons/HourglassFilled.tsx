// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HourglassFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HourglassFilled: HourglassFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HourglassFilledSvg}></AntdIcon>;
};

HourglassFilled.displayName = 'HourglassFilled';
HourglassFilled.inheritAttrs = false;
export default HourglassFilled;