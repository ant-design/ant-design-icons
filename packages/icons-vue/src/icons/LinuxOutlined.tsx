// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinuxOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinuxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinuxOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinuxOutlined: LinuxOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinuxOutlinedSvg}></AntdIcon>;
};

LinuxOutlined.displayName = 'LinuxOutlined';
LinuxOutlined.inheritAttrs = false;
export default LinuxOutlined;