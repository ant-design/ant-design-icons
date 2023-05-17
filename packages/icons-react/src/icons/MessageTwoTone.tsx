// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MessageTwoTone.displayName = 'MessageTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageTwoTone);