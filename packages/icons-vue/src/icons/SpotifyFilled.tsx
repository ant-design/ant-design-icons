// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpotifyFilledSvg from '@ant-design/icons-svg/lib/asn/SpotifyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpotifyFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpotifyFilled: SpotifyFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpotifyFilledSvg}></AntdIcon>;
};

SpotifyFilled.displayName = 'SpotifyFilled';
SpotifyFilled.inheritAttrs = false;
export default SpotifyFilled;