// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeFilled: EyeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeFilledSvg}></AntdIcon>;
};

EyeFilled.displayName = 'EyeFilled';
EyeFilled.inheritAttrs = false;
export default EyeFilled;