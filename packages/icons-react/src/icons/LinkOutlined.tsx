// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LinkOutlined';
}

export default RefIcon;