// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsFilledSvg from '@ant-design/icons-svg/lib/asn/ContactsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsFilledSvg}></AntdIcon>;
};

ContactsFilled.displayName = 'ContactsFilled';
ContactsFilled.inheritAttrs = false;
export default ContactsFilled;