// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UpSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UpSquareFilled: UpSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpSquareFilledSvg}></AntdIcon>;
};

UpSquareFilled.displayName = 'UpSquareFilled';
UpSquareFilled.inheritAttrs = false;
export default UpSquareFilled;