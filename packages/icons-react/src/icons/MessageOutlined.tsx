// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MessageOutlined';
}

export default RefIcon;