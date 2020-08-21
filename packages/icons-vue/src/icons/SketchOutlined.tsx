// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SketchOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SketchOutlinedSvg}></AntdIcon>;
};

SketchOutlined.displayName = 'SketchOutlined';
SketchOutlined.inheritAttrs = false;
export default SketchOutlined;