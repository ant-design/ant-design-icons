// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeiboOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeiboOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeiboOutlined: WeiboOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboOutlinedSvg}></AntdIcon>;
};

WeiboOutlined.displayName = 'WeiboOutlined';
WeiboOutlined.inheritAttrs = false;
export default WeiboOutlined;