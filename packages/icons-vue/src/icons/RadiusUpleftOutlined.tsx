// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadiusUpleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadiusUpleftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadiusUpleftOutlined: RadiusUpleftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadiusUpleftOutlinedSvg}></AntdIcon>;
};

RadiusUpleftOutlined.displayName = 'RadiusUpleftOutlined';
RadiusUpleftOutlined.inheritAttrs = false;
export default RadiusUpleftOutlined;