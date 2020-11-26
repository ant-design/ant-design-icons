// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MediumSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MediumSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MediumSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MediumSquareFilled: MediumSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MediumSquareFilledSvg}></AntdIcon>;
};

MediumSquareFilled.displayName = 'MediumSquareFilled';
MediumSquareFilled.inheritAttrs = false;
export default MediumSquareFilled;