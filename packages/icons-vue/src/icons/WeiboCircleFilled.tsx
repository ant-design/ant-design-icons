// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeiboCircleFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeiboCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeiboCircleFilled: WeiboCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboCircleFilledSvg}></AntdIcon>;
};

WeiboCircleFilled.displayName = 'WeiboCircleFilled';
WeiboCircleFilled.inheritAttrs = false;
export default WeiboCircleFilled;