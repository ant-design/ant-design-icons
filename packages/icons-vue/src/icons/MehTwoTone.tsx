// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MehTwoToneSvg from '@ant-design/icons-svg/lib/asn/MehTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MehTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MehTwoTone: MehTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MehTwoToneSvg}></AntdIcon>;
};

MehTwoTone.displayName = 'MehTwoTone';
MehTwoTone.inheritAttrs = false;
export default MehTwoTone;