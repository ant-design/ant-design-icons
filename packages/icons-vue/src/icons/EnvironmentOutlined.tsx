// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnvironmentOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnvironmentOutlinedSvg}></AntdIcon>;
};

EnvironmentOutlined.displayName = 'EnvironmentOutlined';
EnvironmentOutlined.inheritAttrs = false;
export default EnvironmentOutlined;