// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WhatsAppOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WhatsAppOutlined: WhatsAppOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WhatsAppOutlinedSvg}></AntdIcon>;
};

WhatsAppOutlined.displayName = 'WhatsAppOutlined';
WhatsAppOutlined.inheritAttrs = false;
export default WhatsAppOutlined;