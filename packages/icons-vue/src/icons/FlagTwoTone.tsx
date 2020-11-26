// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagTwoTone: FlagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagTwoToneSvg}></AntdIcon>;
};

FlagTwoTone.displayName = 'FlagTwoTone';
FlagTwoTone.inheritAttrs = false;
export default FlagTwoTone;