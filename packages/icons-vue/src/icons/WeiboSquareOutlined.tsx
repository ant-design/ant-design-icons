// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeiboSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeiboSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeiboSquareOutlined: WeiboSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboSquareOutlinedSvg}></AntdIcon>;
};

WeiboSquareOutlined.displayName = 'WeiboSquareOutlined';
WeiboSquareOutlined.inheritAttrs = false;
export default WeiboSquareOutlined;