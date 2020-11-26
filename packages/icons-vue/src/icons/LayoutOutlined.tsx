// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayoutOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayoutOutlined: LayoutOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutOutlinedSvg}></AntdIcon>;
};

LayoutOutlined.displayName = 'LayoutOutlined';
LayoutOutlined.inheritAttrs = false;
export default LayoutOutlined;