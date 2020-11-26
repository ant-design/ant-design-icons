// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeiboSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeiboSquareFilled: WeiboSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboSquareFilledSvg}></AntdIcon>;
};

WeiboSquareFilled.displayName = 'WeiboSquareFilled';
WeiboSquareFilled.inheritAttrs = false;
export default WeiboSquareFilled;