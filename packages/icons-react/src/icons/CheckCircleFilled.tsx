// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CheckCircleFilled.displayName = 'CheckCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckCircleFilled);