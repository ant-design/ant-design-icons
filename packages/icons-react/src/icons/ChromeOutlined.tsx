// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChromeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ChromeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChromeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChromeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ChromeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChromeOutlined';
}

export default RefIcon;