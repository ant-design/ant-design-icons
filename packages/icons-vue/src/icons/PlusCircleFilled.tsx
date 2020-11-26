// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlusCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlusCircleFilled: PlusCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusCircleFilledSvg}></AntdIcon>;
};

PlusCircleFilled.displayName = 'PlusCircleFilled';
PlusCircleFilled.inheritAttrs = false;
export default PlusCircleFilled;