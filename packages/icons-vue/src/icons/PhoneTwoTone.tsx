// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/PhoneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PhoneTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PhoneTwoTone: PhoneTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneTwoToneSvg}></AntdIcon>;
};

PhoneTwoTone.displayName = 'PhoneTwoTone';
PhoneTwoTone.inheritAttrs = false;
export default PhoneTwoTone;