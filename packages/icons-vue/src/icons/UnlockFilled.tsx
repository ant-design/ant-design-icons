// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockFilledSvg from '@ant-design/icons-svg/lib/asn/UnlockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockFilled: UnlockFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockFilledSvg}></AntdIcon>;
};

UnlockFilled.displayName = 'UnlockFilled';
UnlockFilled.inheritAttrs = false;
export default UnlockFilled;