// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudServerOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudServerOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudServerOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloudServerOutlined.displayName = 'CloudServerOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudServerOutlined);