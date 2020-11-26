// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeploymentUnitOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeploymentUnitOutlined: DeploymentUnitOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeploymentUnitOutlinedSvg}></AntdIcon>;
};

DeploymentUnitOutlined.displayName = 'DeploymentUnitOutlined';
DeploymentUnitOutlined.inheritAttrs = false;
export default DeploymentUnitOutlined;