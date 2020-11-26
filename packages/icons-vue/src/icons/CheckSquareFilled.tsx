// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckSquareFilled: CheckSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckSquareFilledSvg}></AntdIcon>;
};

CheckSquareFilled.displayName = 'CheckSquareFilled';
CheckSquareFilled.inheritAttrs = false;
export default CheckSquareFilled;