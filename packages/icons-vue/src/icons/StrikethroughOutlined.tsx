// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StrikethroughOutlinedSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StrikethroughOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrikethroughOutlinedSvg}></AntdIcon>;
};

StrikethroughOutlined.displayName = 'StrikethroughOutlined';
StrikethroughOutlined.inheritAttrs = false;
export default StrikethroughOutlined;