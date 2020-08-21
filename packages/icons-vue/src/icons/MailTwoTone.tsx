// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailTwoToneSvg from '@ant-design/icons-svg/lib/asn/MailTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailTwoToneSvg}></AntdIcon>;
};

MailTwoTone.displayName = 'MailTwoTone';
MailTwoTone.inheritAttrs = false;
export default MailTwoTone;