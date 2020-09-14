// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClockCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClockCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockCircleOutlinedSvg}></AntdIcon>;
};

ClockCircleOutlined.displayName = 'ClockCircleOutlined';
ClockCircleOutlined.inheritAttrs = false;
export default ClockCircleOutlined;