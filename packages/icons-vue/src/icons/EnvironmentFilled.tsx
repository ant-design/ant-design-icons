// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EnvironmentFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EnvironmentFilled: EnvironmentFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnvironmentFilledSvg}></AntdIcon>;
};

EnvironmentFilled.displayName = 'EnvironmentFilled';
EnvironmentFilled.inheritAttrs = false;
export default EnvironmentFilled;