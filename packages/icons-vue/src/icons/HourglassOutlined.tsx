// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HourglassOutlinedSvg from '@ant-design/icons-svg/lib/asn/HourglassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HourglassOutlinedSvg}></AntdIcon>;
};

HourglassOutlined.displayName = 'HourglassOutlined';
HourglassOutlined.inheritAttrs = false;
export default HourglassOutlined;