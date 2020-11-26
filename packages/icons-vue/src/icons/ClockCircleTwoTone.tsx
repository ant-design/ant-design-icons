// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClockCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockCircleTwoTone: ClockCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockCircleTwoToneSvg}></AntdIcon>;
};

ClockCircleTwoTone.displayName = 'ClockCircleTwoTone';
ClockCircleTwoTone.inheritAttrs = false;
export default ClockCircleTwoTone;