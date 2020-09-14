// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullscreenOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FullscreenOutlinedSvg}></AntdIcon>;
};

FullscreenOutlined.displayName = 'FullscreenOutlined';
FullscreenOutlined.inheritAttrs = false;
export default FullscreenOutlined;