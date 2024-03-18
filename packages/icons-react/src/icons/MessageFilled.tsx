// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MessageFilled';
}

export default RefIcon;