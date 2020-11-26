// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LeftSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LeftSquareTwoTone: LeftSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftSquareTwoToneSvg}></AntdIcon>;
};

LeftSquareTwoTone.displayName = 'LeftSquareTwoTone';
LeftSquareTwoTone.inheritAttrs = false;
export default LeftSquareTwoTone;