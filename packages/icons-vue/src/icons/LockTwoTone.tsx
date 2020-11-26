// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockTwoToneSvg from '@ant-design/icons-svg/lib/asn/LockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockTwoTone: LockTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockTwoToneSvg}></AntdIcon>;
};

LockTwoTone.displayName = 'LockTwoTone';
LockTwoTone.inheritAttrs = false;
export default LockTwoTone;