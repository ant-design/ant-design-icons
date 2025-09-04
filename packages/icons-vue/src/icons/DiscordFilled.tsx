// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscordFilledSvg from '@ant-design/icons-svg/lib/asn/DiscordFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscordFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscordFilled: DiscordFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscordFilledSvg}></AntdIcon>;
};

DiscordFilled.displayName = 'DiscordFilled';
DiscordFilled.inheritAttrs = false;
export default DiscordFilled;