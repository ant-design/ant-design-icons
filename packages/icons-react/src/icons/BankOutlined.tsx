// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BankOutlined.displayName = 'BankOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BankOutlined);