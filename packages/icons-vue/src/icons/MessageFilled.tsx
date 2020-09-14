// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFilledSvg}></AntdIcon>;
};

MessageFilled.displayName = 'MessageFilled';
MessageFilled.inheritAttrs = false;
export default MessageFilled;