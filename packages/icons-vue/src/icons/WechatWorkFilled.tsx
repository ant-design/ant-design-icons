// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WechatWorkFilledSvg from '@ant-design/icons-svg/lib/asn/WechatWorkFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WechatWorkFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WechatWorkFilled: WechatWorkFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatWorkFilledSvg}></AntdIcon>;
};

WechatWorkFilled.displayName = 'WechatWorkFilled';
WechatWorkFilled.inheritAttrs = false;
export default WechatWorkFilled;