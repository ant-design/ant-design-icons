// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhoneFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PhoneFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PhoneFilled';
}

export default RefIcon;