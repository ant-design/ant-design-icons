// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ContactsFilledSvg from '@ant-design/icons-svg/lib/asn/ContactsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ContactsFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ContactsFilled: ContactsFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsFilledSvg}></AntdIcon>;
};

ContactsFilled.displayName = 'ContactsFilled';
ContactsFilled.inheritAttrs = false;
export default ContactsFilled;