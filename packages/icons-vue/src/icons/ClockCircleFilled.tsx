// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ClockCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockCircleFilled: ClockCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockCircleFilledSvg}></AntdIcon>;
};

ClockCircleFilled.displayName = 'ClockCircleFilled';
ClockCircleFilled.inheritAttrs = false;
export default ClockCircleFilled;