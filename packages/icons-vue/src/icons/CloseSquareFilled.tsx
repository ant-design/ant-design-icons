// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseSquareFilled: CloseSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseSquareFilledSvg}></AntdIcon>;
};

CloseSquareFilled.displayName = 'CloseSquareFilled';
CloseSquareFilled.inheritAttrs = false;
export default CloseSquareFilled;