// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTwoTone: MessageTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTwoToneSvg}></AntdIcon>;
};

MessageTwoTone.displayName = 'MessageTwoTone';
MessageTwoTone.inheritAttrs = false;
export default MessageTwoTone;