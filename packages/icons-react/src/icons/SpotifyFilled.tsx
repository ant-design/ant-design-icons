// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpotifyFilledSvg from '@ant-design/icons-svg/lib/asn/SpotifyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpotifyFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpotifyFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SpotifyFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SpotifyFilled';
}

export default RefIcon;