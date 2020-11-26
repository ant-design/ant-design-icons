// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeTwoTone: EyeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeTwoToneSvg}></AntdIcon>;
};

EyeTwoTone.displayName = 'EyeTwoTone';
EyeTwoTone.inheritAttrs = false;
export default EyeTwoTone;