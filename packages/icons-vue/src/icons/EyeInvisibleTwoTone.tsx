// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeInvisibleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeInvisibleTwoTone: EyeInvisibleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeInvisibleTwoToneSvg}></AntdIcon>;
};

EyeInvisibleTwoTone.displayName = 'EyeInvisibleTwoTone';
EyeInvisibleTwoTone.inheritAttrs = false;
export default EyeInvisibleTwoTone;