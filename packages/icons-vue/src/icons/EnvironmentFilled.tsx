// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnvironmentFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnvironmentFilledSvg}></AntdIcon>;
};

EnvironmentFilled.displayName = 'EnvironmentFilled';
EnvironmentFilled.inheritAttrs = false;
export default EnvironmentFilled;