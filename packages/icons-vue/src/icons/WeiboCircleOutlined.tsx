// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeiboCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeiboCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeiboCircleOutlined: WeiboCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboCircleOutlinedSvg}></AntdIcon>;
};

WeiboCircleOutlined.displayName = 'WeiboCircleOutlined';
WeiboCircleOutlined.inheritAttrs = false;
export default WeiboCircleOutlined;