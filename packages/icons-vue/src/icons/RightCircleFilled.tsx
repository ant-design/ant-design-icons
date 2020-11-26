// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RightCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RightCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RightCircleFilled: RightCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightCircleFilledSvg}></AntdIcon>;
};

RightCircleFilled.displayName = 'RightCircleFilled';
RightCircleFilled.inheritAttrs = false;
export default RightCircleFilled;