// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClockCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockCircleOutlined: ClockCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockCircleOutlinedSvg}></AntdIcon>;
};

ClockCircleOutlined.displayName = 'ClockCircleOutlined';
ClockCircleOutlined.inheritAttrs = false;
export default ClockCircleOutlined;