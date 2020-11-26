// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafetyCertificateTwoToneSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafetyCertificateTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafetyCertificateTwoTone: SafetyCertificateTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafetyCertificateTwoToneSvg}></AntdIcon>;
};

SafetyCertificateTwoTone.displayName = 'SafetyCertificateTwoTone';
SafetyCertificateTwoTone.inheritAttrs = false;
export default SafetyCertificateTwoTone;