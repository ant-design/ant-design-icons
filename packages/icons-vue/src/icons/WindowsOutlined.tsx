// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindowsOutlinedSvg from '@ant-design/icons-svg/lib/asn/WindowsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindowsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindowsOutlined: WindowsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindowsOutlinedSvg}></AntdIcon>;
};

WindowsOutlined.displayName = 'WindowsOutlined';
WindowsOutlined.inheritAttrs = false;
export default WindowsOutlined;