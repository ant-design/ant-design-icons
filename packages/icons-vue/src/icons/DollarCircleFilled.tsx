// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DollarCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarCircleFilled: DollarCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarCircleFilledSvg}></AntdIcon>;
};

DollarCircleFilled.displayName = 'DollarCircleFilled';
DollarCircleFilled.inheritAttrs = false;
export default DollarCircleFilled;