// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorOutlinedSvg from '@ant-design/icons-svg/lib/asn/MonitorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorOutlined: MonitorOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorOutlinedSvg}></AntdIcon>;
};

MonitorOutlined.displayName = 'MonitorOutlined';
MonitorOutlined.inheritAttrs = false;
export default MonitorOutlined;