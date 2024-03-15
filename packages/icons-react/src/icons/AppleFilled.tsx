// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AppleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AppleFilled';
}

export default RefIcon;