// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AppleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AppleFilled: AppleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppleFilledSvg}></AntdIcon>;
};

AppleFilled.displayName = 'AppleFilled';
AppleFilled.inheritAttrs = false;
export default AppleFilled;