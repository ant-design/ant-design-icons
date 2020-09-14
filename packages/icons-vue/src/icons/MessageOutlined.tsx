// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageOutlinedSvg}></AntdIcon>;
};

MessageOutlined.displayName = 'MessageOutlined';
MessageOutlined.inheritAttrs = false;
export default MessageOutlined;