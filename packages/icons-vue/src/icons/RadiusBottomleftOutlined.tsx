// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadiusBottomleftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadiusBottomleftOutlined: RadiusBottomleftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadiusBottomleftOutlinedSvg}></AntdIcon>;
};

RadiusBottomleftOutlined.displayName = 'RadiusBottomleftOutlined';
RadiusBottomleftOutlined.inheritAttrs = false;
export default RadiusBottomleftOutlined;