// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadiusBottomrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadiusBottomrightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadiusBottomrightOutlined: RadiusBottomrightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadiusBottomrightOutlinedSvg}></AntdIcon>;
};

RadiusBottomrightOutlined.displayName = 'RadiusBottomrightOutlined';
RadiusBottomrightOutlined.inheritAttrs = false;
export default RadiusBottomrightOutlined;