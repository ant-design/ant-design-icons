// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SketchOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SketchOutlined: SketchOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SketchOutlinedSvg}></AntdIcon>;
};

SketchOutlined.displayName = 'SketchOutlined';
SketchOutlined.inheritAttrs = false;
export default SketchOutlined;