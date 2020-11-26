// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SwitcherFilledSvg from '@ant-design/icons-svg/lib/asn/SwitcherFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SwitcherFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SwitcherFilled: SwitcherFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitcherFilledSvg}></AntdIcon>;
};

SwitcherFilled.displayName = 'SwitcherFilled';
SwitcherFilled.inheritAttrs = false;
export default SwitcherFilled;