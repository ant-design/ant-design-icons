// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SketchSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SketchSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SketchSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SketchSquareFilled: SketchSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SketchSquareFilledSvg}></AntdIcon>;
};

SketchSquareFilled.displayName = 'SketchSquareFilled';
SketchSquareFilled.inheritAttrs = false;
export default SketchSquareFilled;