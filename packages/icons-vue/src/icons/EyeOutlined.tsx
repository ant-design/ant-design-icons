// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeOutlined: EyeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeOutlinedSvg}></AntdIcon>;
};

EyeOutlined.displayName = 'EyeOutlined';
EyeOutlined.inheritAttrs = false;
export default EyeOutlined;