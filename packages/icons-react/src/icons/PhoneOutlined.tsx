// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PhoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/PhoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhoneOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PhoneOutlined.displayName = 'PhoneOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PhoneOutlined);