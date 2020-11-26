// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockFilled: LockFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockFilledSvg}></AntdIcon>;
};

LockFilled.displayName = 'LockFilled';
LockFilled.inheritAttrs = false;
export default LockFilled;