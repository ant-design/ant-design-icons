// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTwoToneSvg}></AntdIcon>;
};

MessageTwoTone.displayName = 'MessageTwoTone';
MessageTwoTone.inheritAttrs = false;
export default MessageTwoTone;