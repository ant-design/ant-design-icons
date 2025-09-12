// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DotNetOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotNetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DotNetOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DotNetOutlined: DotNetOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DotNetOutlinedSvg}></AntdIcon>;
};

DotNetOutlined.displayName = 'DotNetOutlined';
DotNetOutlined.inheritAttrs = false;
export default DotNetOutlined;