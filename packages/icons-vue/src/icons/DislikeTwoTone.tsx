// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DislikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeTwoTone: DislikeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeTwoToneSvg}></AntdIcon>;
};

DislikeTwoTone.displayName = 'DislikeTwoTone';
DislikeTwoTone.inheritAttrs = false;
export default DislikeTwoTone;