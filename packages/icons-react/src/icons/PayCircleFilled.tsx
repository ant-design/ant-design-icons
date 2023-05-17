// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PayCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PayCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PayCircleFilled.displayName = 'PayCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PayCircleFilled);