// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TikTokFilledSvg from '@ant-design/icons-svg/lib/asn/TikTokFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TikTokFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TikTokFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TikTokFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TikTokFilled';
}

export default RefIcon;