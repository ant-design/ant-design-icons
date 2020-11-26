// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileFilled: MobileFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileFilledSvg}></AntdIcon>;
};

MobileFilled.displayName = 'MobileFilled';
MobileFilled.inheritAttrs = false;
export default MobileFilled;