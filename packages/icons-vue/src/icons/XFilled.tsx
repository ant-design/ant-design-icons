// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import XFilledSvg from '@ant-design/icons-svg/lib/asn/XFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface XFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const XFilled: XFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={XFilledSvg}></AntdIcon>;
};

XFilled.displayName = 'XFilled';
XFilled.inheritAttrs = false;
export default XFilled;