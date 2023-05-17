// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TransactionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TransactionOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TransactionOutlined.displayName = 'TransactionOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TransactionOutlined);