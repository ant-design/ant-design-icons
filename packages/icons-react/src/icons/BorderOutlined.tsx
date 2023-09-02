// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BorderOutlined.displayName = 'BorderOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderOutlined);