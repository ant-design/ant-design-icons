// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsuranceOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsuranceOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsuranceOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InsuranceOutlined.displayName = 'InsuranceOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InsuranceOutlined);