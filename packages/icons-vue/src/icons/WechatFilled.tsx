// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WechatFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WechatFilled: WechatFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatFilledSvg}></AntdIcon>;
};

WechatFilled.displayName = 'WechatFilled';
WechatFilled.inheritAttrs = false;
export default WechatFilled;