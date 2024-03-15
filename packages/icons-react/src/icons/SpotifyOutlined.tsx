// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpotifyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SpotifyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpotifyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpotifyOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SpotifyOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SpotifyOutlined';
}

export default RefIcon;