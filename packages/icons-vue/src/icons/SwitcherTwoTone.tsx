// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/asn/SwitcherTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SwitcherTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SwitcherTwoTone: SwitcherTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitcherTwoToneSvg}></AntdIcon>;
};

SwitcherTwoTone.displayName = 'SwitcherTwoTone';
SwitcherTwoTone.inheritAttrs = false;
export default SwitcherTwoTone;