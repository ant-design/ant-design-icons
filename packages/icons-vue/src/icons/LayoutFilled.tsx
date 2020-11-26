// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayoutFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayoutFilled: LayoutFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutFilledSvg}></AntdIcon>;
};

LayoutFilled.displayName = 'LayoutFilled';
LayoutFilled.inheritAttrs = false;
export default LayoutFilled;