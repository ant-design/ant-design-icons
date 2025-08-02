// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BilibiliOutlinedSvg from '@ant-design/icons-svg/lib/asn/BilibiliOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BilibiliOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BilibiliOutlined: BilibiliOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BilibiliOutlinedSvg}></AntdIcon>;
};

BilibiliOutlined.displayName = 'BilibiliOutlined';
BilibiliOutlined.inheritAttrs = false;
export default BilibiliOutlined;