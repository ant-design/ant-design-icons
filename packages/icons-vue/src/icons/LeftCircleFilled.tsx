// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LeftCircleFilledSvg from '@ant-design/icons-svg/lib/asn/LeftCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LeftCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LeftCircleFilled: LeftCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftCircleFilledSvg}></AntdIcon>;
};

LeftCircleFilled.displayName = 'LeftCircleFilled';
LeftCircleFilled.inheritAttrs = false;
export default LeftCircleFilled;