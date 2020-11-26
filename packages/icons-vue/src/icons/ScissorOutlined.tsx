// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScissorOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScissorOutlined: ScissorOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorOutlinedSvg}></AntdIcon>;
};

ScissorOutlined.displayName = 'ScissorOutlined';
ScissorOutlined.inheritAttrs = false;
export default ScissorOutlined;