// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VerifiedOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerifiedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerifiedOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerifiedOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  VerifiedOutlined.displayName = 'VerifiedOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VerifiedOutlined);