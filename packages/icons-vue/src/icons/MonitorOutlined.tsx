// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MonitorOutlinedSvg from '@ant-design/icons-svg/lib/asn/MonitorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorOutlinedSvg}></AntdIcon>;
};

MonitorOutlined.displayName = 'MonitorOutlined';
MonitorOutlined.inheritAttrs = false;
export default MonitorOutlined;