// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TwitchFilledSvg from '@ant-design/icons-svg/lib/asn/TwitchFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TwitchFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TwitchFilled: TwitchFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitchFilledSvg}></AntdIcon>;
};

TwitchFilled.displayName = 'TwitchFilled';
TwitchFilled.inheritAttrs = false;
export default TwitchFilled;