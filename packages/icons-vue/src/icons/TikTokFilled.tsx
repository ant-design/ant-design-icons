// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TikTokFilledSvg from '@ant-design/icons-svg/lib/asn/TikTokFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TikTokFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TikTokFilled: TikTokFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TikTokFilledSvg}></AntdIcon>;
};

TikTokFilled.displayName = 'TikTokFilled';
TikTokFilled.inheritAttrs = false;
export default TikTokFilled;