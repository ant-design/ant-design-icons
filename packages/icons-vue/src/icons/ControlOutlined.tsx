// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ControlOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ControlOutlined: ControlOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ControlOutlinedSvg}></AntdIcon>;
};

ControlOutlined.displayName = 'ControlOutlined';
ControlOutlined.inheritAttrs = false;
export default ControlOutlined;