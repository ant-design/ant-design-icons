// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShakeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShakeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShakeOutlinedSvg}></AntdIcon>;
};

ShakeOutlined.displayName = 'ShakeOutlined';
ShakeOutlined.inheritAttrs = false;
export default ShakeOutlined;