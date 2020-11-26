// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DashboardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DashboardOutlined: DashboardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashboardOutlinedSvg}></AntdIcon>;
};

DashboardOutlined.displayName = 'DashboardOutlined';
DashboardOutlined.inheritAttrs = false;
export default DashboardOutlined;