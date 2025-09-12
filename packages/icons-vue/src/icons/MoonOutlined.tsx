// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonOutlined: MoonOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonOutlinedSvg}></AntdIcon>;
};

MoonOutlined.displayName = 'MoonOutlined';
MoonOutlined.inheritAttrs = false;
export default MoonOutlined;