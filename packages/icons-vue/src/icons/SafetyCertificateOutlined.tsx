// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafetyCertificateOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafetyCertificateOutlined: SafetyCertificateOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafetyCertificateOutlinedSvg}></AntdIcon>;
};

SafetyCertificateOutlined.displayName = 'SafetyCertificateOutlined';
SafetyCertificateOutlined.inheritAttrs = false;
export default SafetyCertificateOutlined;