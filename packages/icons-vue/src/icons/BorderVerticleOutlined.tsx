// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderVerticleOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderVerticleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderVerticleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderVerticleOutlined: BorderVerticleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderVerticleOutlinedSvg}></AntdIcon>;
};

BorderVerticleOutlined.displayName = 'BorderVerticleOutlined';
BorderVerticleOutlined.inheritAttrs = false;
export default BorderVerticleOutlined;