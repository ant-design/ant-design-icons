// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BaiduOutlinedSvg from '@ant-design/icons-svg/lib/asn/BaiduOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BaiduOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BaiduOutlined: BaiduOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BaiduOutlinedSvg}></AntdIcon>;
};

BaiduOutlined.displayName = 'BaiduOutlined';
BaiduOutlined.inheritAttrs = false;
export default BaiduOutlined;