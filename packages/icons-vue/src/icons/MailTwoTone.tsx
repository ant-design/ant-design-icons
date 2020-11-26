// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MailTwoToneSvg from '@ant-design/icons-svg/lib/asn/MailTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MailTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MailTwoTone: MailTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailTwoToneSvg}></AntdIcon>;
};

MailTwoTone.displayName = 'MailTwoTone';
MailTwoTone.inheritAttrs = false;
export default MailTwoTone;