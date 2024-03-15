// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MobileFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MobileFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MobileFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MobileFilled';
}

export default RefIcon;