// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/PhoneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneTwoToneSvg}></AntdIcon>;
};

PhoneTwoTone.displayName = 'PhoneTwoTone';
PhoneTwoTone.inheritAttrs = false;
export default PhoneTwoTone;