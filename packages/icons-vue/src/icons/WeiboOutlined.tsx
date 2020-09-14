// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WeiboOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboOutlinedSvg}></AntdIcon>;
};

WeiboOutlined.displayName = 'WeiboOutlined';
WeiboOutlined.inheritAttrs = false;
export default WeiboOutlined;