// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeOutlinedSvg}></AntdIcon>;
};

LikeOutlined.displayName = 'LikeOutlined';
LikeOutlined.inheritAttrs = false;
export default LikeOutlined;