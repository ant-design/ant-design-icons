// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AccountBookOutlinedSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBookOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountBookOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AccountBookOutlined.displayName = 'AccountBookOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountBookOutlined);