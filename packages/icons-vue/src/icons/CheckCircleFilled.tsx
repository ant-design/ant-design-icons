// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckCircleFilled: CheckCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckCircleFilledSvg}></AntdIcon>;
};

CheckCircleFilled.displayName = 'CheckCircleFilled';
CheckCircleFilled.inheritAttrs = false;
export default CheckCircleFilled;