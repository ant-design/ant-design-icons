// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PhoneFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PhoneFilled: PhoneFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneFilledSvg}></AntdIcon>;
};

PhoneFilled.displayName = 'PhoneFilled';
PhoneFilled.inheritAttrs = false;
export default PhoneFilled;