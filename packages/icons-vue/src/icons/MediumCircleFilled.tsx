// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MediumCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MediumCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MediumCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MediumCircleFilled: MediumCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MediumCircleFilledSvg}></AntdIcon>;
};

MediumCircleFilled.displayName = 'MediumCircleFilled';
MediumCircleFilled.inheritAttrs = false;
export default MediumCircleFilled;