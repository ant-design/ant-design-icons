// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SketchCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SketchCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SketchCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SketchCircleFilled: SketchCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SketchCircleFilledSvg}></AntdIcon>;
};

SketchCircleFilled.displayName = 'SketchCircleFilled';
SketchCircleFilled.inheritAttrs = false;
export default SketchCircleFilled;