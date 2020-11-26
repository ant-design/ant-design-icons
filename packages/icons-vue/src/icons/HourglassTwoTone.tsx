// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HourglassTwoToneSvg from '@ant-design/icons-svg/lib/asn/HourglassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HourglassTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HourglassTwoTone: HourglassTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HourglassTwoToneSvg}></AntdIcon>;
};

HourglassTwoTone.displayName = 'HourglassTwoTone';
HourglassTwoTone.inheritAttrs = false;
export default HourglassTwoTone;