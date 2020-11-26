// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EnvironmentOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EnvironmentOutlined: EnvironmentOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnvironmentOutlinedSvg}></AntdIcon>;
};

EnvironmentOutlined.displayName = 'EnvironmentOutlined';
EnvironmentOutlined.inheritAttrs = false;
export default EnvironmentOutlined;