// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesktopOutlinedSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DesktopOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DesktopOutlined: DesktopOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesktopOutlinedSvg}></AntdIcon>;
};

DesktopOutlined.displayName = 'DesktopOutlined';
DesktopOutlined.inheritAttrs = false;
export default DesktopOutlined;