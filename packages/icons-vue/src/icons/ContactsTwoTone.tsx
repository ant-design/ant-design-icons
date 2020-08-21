// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsTwoToneSvg}></AntdIcon>;
};

ContactsTwoTone.displayName = 'ContactsTwoTone';
ContactsTwoTone.inheritAttrs = false;
export default ContactsTwoTone;