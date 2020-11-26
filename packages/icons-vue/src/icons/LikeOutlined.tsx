// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeOutlined: LikeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeOutlinedSvg}></AntdIcon>;
};

LikeOutlined.displayName = 'LikeOutlined';
LikeOutlined.inheritAttrs = false;
export default LikeOutlined;