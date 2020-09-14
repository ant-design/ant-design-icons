// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramOutlinedSvg}></AntdIcon>;
};

InstagramOutlined.displayName = 'InstagramOutlined';
InstagramOutlined.inheritAttrs = false;
export default InstagramOutlined;