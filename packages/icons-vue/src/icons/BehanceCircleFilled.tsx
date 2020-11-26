// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BehanceCircleFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BehanceCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BehanceCircleFilled: BehanceCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BehanceCircleFilledSvg}></AntdIcon>;
};

BehanceCircleFilled.displayName = 'BehanceCircleFilled';
BehanceCircleFilled.inheritAttrs = false;
export default BehanceCircleFilled;