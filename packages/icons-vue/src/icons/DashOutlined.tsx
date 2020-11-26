// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DashOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DashOutlined: DashOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashOutlinedSvg}></AntdIcon>;
};

DashOutlined.displayName = 'DashOutlined';
DashOutlined.inheritAttrs = false;
export default DashOutlined;