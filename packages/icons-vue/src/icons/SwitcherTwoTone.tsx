// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/asn/SwitcherTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitcherTwoToneSvg}></AntdIcon>;
};

SwitcherTwoTone.displayName = 'SwitcherTwoTone';
SwitcherTwoTone.inheritAttrs = false;
export default SwitcherTwoTone;