// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadiusUprightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUprightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadiusUprightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadiusUprightOutlined: RadiusUprightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadiusUprightOutlinedSvg}></AntdIcon>;
};

RadiusUprightOutlined.displayName = 'RadiusUprightOutlined';
RadiusUprightOutlined.inheritAttrs = false;
export default RadiusUprightOutlined;