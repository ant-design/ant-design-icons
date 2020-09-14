// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkinOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkinOutlinedSvg}></AntdIcon>;
};

SkinOutlined.displayName = 'SkinOutlined';
SkinOutlined.inheritAttrs = false;
export default SkinOutlined;