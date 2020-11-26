// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SwitcherOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SwitcherOutlined: SwitcherOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitcherOutlinedSvg}></AntdIcon>;
};

SwitcherOutlined.displayName = 'SwitcherOutlined';
SwitcherOutlined.inheritAttrs = false;
export default SwitcherOutlined;