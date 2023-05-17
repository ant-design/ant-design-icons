// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InboxOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InboxOutlined.displayName = 'InboxOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InboxOutlined);