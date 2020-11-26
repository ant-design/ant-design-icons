// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockTwoTone: UnlockTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockTwoToneSvg}></AntdIcon>;
};

UnlockTwoTone.displayName = 'UnlockTwoTone';
UnlockTwoTone.inheritAttrs = false;
export default UnlockTwoTone;