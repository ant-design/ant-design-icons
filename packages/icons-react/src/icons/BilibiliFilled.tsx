// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BilibiliFilledSvg from '@ant-design/icons-svg/lib/asn/BilibiliFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilibiliFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BilibiliFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BilibiliFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BilibiliFilled';
}

export default RefIcon;