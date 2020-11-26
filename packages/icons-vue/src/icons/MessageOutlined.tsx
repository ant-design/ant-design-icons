// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageOutlined: MessageOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageOutlinedSvg}></AntdIcon>;
};

MessageOutlined.displayName = 'MessageOutlined';
MessageOutlined.inheritAttrs = false;
export default MessageOutlined;