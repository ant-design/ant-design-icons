// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LeftSquareFilledSvg from '@ant-design/icons-svg/lib/asn/LeftSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LeftSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LeftSquareFilled: LeftSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftSquareFilledSvg}></AntdIcon>;
};

LeftSquareFilled.displayName = 'LeftSquareFilled';
LeftSquareFilled.inheritAttrs = false;
export default LeftSquareFilled;