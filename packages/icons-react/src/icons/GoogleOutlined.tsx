// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoogleOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoogleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GoogleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GoogleOutlined';
}

export default RefIcon;