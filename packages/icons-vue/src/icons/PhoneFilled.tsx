// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneFilledSvg}></AntdIcon>;
};

PhoneFilled.displayName = 'PhoneFilled';
PhoneFilled.inheritAttrs = false;
export default PhoneFilled;