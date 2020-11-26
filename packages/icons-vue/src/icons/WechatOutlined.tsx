// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WechatOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WechatOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WechatOutlined: WechatOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatOutlinedSvg}></AntdIcon>;
};

WechatOutlined.displayName = 'WechatOutlined';
WechatOutlined.inheritAttrs = false;
export default WechatOutlined;