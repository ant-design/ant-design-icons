// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CheckCircleOutlined.displayName = 'CheckCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckCircleOutlined);