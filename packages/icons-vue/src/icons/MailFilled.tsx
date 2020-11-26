// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MailFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MailFilled: MailFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailFilledSvg}></AntdIcon>;
};

MailFilled.displayName = 'MailFilled';
MailFilled.inheritAttrs = false;
export default MailFilled;