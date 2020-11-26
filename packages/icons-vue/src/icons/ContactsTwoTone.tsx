// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ContactsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ContactsTwoTone: ContactsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsTwoToneSvg}></AntdIcon>;
};

ContactsTwoTone.displayName = 'ContactsTwoTone';
ContactsTwoTone.inheritAttrs = false;
export default ContactsTwoTone;