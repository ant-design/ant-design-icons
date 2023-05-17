// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MessageFilled.displayName = 'MessageFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageFilled);