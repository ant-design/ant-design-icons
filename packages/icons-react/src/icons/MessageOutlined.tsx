// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MessageOutlined.displayName = 'MessageOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageOutlined);