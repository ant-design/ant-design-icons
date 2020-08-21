// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DashboardFilledSvg from '@ant-design/icons-svg/lib/asn/DashboardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashboardFilledSvg}></AntdIcon>;
};

DashboardFilled.displayName = 'DashboardFilled';
DashboardFilled.inheritAttrs = false;
export default DashboardFilled;