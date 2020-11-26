// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageFilled: MessageFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFilledSvg}></AntdIcon>;
};

MessageFilled.displayName = 'MessageFilled';
MessageFilled.inheritAttrs = false;
export default MessageFilled;