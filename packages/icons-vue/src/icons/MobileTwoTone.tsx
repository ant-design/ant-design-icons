// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileTwoTone: MobileTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileTwoToneSvg}></AntdIcon>;
};

MobileTwoTone.displayName = 'MobileTwoTone';
MobileTwoTone.inheritAttrs = false;
export default MobileTwoTone;