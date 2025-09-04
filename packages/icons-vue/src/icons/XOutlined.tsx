// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import XOutlinedSvg from '@ant-design/icons-svg/lib/asn/XOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface XOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const XOutlined: XOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={XOutlinedSvg}></AntdIcon>;
};

XOutlined.displayName = 'XOutlined';
XOutlined.inheritAttrs = false;
export default XOutlined;