// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HourglassOutlinedSvg from '@ant-design/icons-svg/lib/asn/HourglassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HourglassOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HourglassOutlined: HourglassOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HourglassOutlinedSvg}></AntdIcon>;
};

HourglassOutlined.displayName = 'HourglassOutlined';
HourglassOutlined.inheritAttrs = false;
export default HourglassOutlined;