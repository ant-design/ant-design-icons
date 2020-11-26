// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkedinFilledSvg from '@ant-design/icons-svg/lib/asn/LinkedinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkedinFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkedinFilled: LinkedinFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkedinFilledSvg}></AntdIcon>;
};

LinkedinFilled.displayName = 'LinkedinFilled';
LinkedinFilled.inheritAttrs = false;
export default LinkedinFilled;