// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopOutlinedSvg}></AntdIcon>;
};

StopOutlined.displayName = 'StopOutlined';
StopOutlined.inheritAttrs = false;
export default StopOutlined;