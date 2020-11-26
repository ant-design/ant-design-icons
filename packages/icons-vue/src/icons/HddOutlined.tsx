// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HddOutlinedSvg from '@ant-design/icons-svg/lib/asn/HddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HddOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HddOutlined: HddOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HddOutlinedSvg}></AntdIcon>;
};

HddOutlined.displayName = 'HddOutlined';
HddOutlined.inheritAttrs = false;
export default HddOutlined;