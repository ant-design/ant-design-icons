// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBookFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountBookFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AccountBookFilled.displayName = 'AccountBookFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountBookFilled);