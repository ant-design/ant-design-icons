// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UpSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UpSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UpSquareTwoTone: UpSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpSquareTwoToneSvg}></AntdIcon>;
};

UpSquareTwoTone.displayName = 'UpSquareTwoTone';
UpSquareTwoTone.inheritAttrs = false;
export default UpSquareTwoTone;