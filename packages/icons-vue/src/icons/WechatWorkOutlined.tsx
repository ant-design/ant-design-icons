// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WechatWorkOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatWorkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WechatWorkOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WechatWorkOutlined: WechatWorkOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatWorkOutlinedSvg}></AntdIcon>;
};

WechatWorkOutlined.displayName = 'WechatWorkOutlined';
WechatWorkOutlined.inheritAttrs = false;
export default WechatWorkOutlined;