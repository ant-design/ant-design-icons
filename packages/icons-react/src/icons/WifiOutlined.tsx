// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WifiOutlinedSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WifiOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WifiOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WifiOutlined';
}

export default RefIcon;