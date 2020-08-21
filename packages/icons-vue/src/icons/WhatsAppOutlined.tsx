// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WhatsAppOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WhatsAppOutlinedSvg}></AntdIcon>;
};

WhatsAppOutlined.displayName = 'WhatsAppOutlined';
WhatsAppOutlined.inheritAttrs = false;
export default WhatsAppOutlined;