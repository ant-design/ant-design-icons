// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InboxOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InboxOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InboxOutlined';
}

export default RefIcon;