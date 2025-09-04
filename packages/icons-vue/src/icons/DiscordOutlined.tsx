// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscordOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiscordOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscordOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscordOutlined: DiscordOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscordOutlinedSvg}></AntdIcon>;
};

DiscordOutlined.displayName = 'DiscordOutlined';
DiscordOutlined.inheritAttrs = false;
export default DiscordOutlined;