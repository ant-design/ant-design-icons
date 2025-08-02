// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpotifyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SpotifyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpotifyOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpotifyOutlined: SpotifyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpotifyOutlinedSvg}></AntdIcon>;
};

SpotifyOutlined.displayName = 'SpotifyOutlined';
SpotifyOutlined.inheritAttrs = false;
export default SpotifyOutlined;