// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderLeftOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BorderLeftOutlined.displayName = 'BorderLeftOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderLeftOutlined);