// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TikTokOutlinedSvg from '@ant-design/icons-svg/lib/asn/TikTokOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TikTokOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TikTokOutlined: TikTokOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TikTokOutlinedSvg}></AntdIcon>;
};

TikTokOutlined.displayName = 'TikTokOutlined';
TikTokOutlined.inheritAttrs = false;
export default TikTokOutlined;