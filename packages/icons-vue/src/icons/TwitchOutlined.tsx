// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TwitchOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TwitchOutlined: TwitchOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitchOutlinedSvg}></AntdIcon>;
};

TwitchOutlined.displayName = 'TwitchOutlined';
TwitchOutlined.inheritAttrs = false;
export default TwitchOutlined;