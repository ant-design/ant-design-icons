// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudServerOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudServerOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudServerOutlined: CloudServerOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudServerOutlinedSvg}></AntdIcon>;
};

CloudServerOutlined.displayName = 'CloudServerOutlined';
CloudServerOutlined.inheritAttrs = false;
export default CloudServerOutlined;