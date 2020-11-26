// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DashboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/DashboardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DashboardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DashboardTwoTone: DashboardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashboardTwoToneSvg}></AntdIcon>;
};

DashboardTwoTone.displayName = 'DashboardTwoTone';
DashboardTwoTone.inheritAttrs = false;
export default DashboardTwoTone;