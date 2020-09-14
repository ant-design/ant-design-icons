// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashboardOutlinedSvg}></AntdIcon>;
};

DashboardOutlined.displayName = 'DashboardOutlined';
DashboardOutlined.inheritAttrs = false;
export default DashboardOutlined;