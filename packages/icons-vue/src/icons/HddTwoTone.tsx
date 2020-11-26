// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HddTwoToneSvg from '@ant-design/icons-svg/lib/asn/HddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HddTwoTone: HddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HddTwoToneSvg}></AntdIcon>;
};

HddTwoTone.displayName = 'HddTwoTone';
HddTwoTone.inheritAttrs = false;
export default HddTwoTone;