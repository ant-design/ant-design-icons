// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhoneFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PhoneFilled.displayName = 'PhoneFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PhoneFilled);