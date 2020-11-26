// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ContactsOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContactsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ContactsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ContactsOutlined: ContactsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsOutlinedSvg}></AntdIcon>;
};

ContactsOutlined.displayName = 'ContactsOutlined';
ContactsOutlined.inheritAttrs = false;
export default ContactsOutlined;