// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppleFilledSvg}></AntdIcon>;
};

AppleFilled.displayName = 'AppleFilled';
AppleFilled.inheritAttrs = false;
export default AppleFilled;