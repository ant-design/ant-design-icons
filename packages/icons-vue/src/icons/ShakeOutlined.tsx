// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShakeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShakeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShakeOutlined: ShakeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShakeOutlinedSvg}></AntdIcon>;
};

ShakeOutlined.displayName = 'ShakeOutlined';
ShakeOutlined.inheritAttrs = false;
export default ShakeOutlined;