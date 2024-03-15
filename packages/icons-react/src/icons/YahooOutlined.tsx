// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YahooOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YahooOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(YahooOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'YahooOutlined';
}

export default RefIcon;