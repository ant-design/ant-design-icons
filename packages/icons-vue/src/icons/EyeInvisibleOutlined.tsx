// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeInvisibleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeInvisibleOutlined: EyeInvisibleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeInvisibleOutlinedSvg}></AntdIcon>;
};

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
EyeInvisibleOutlined.inheritAttrs = false;
export default EyeInvisibleOutlined;