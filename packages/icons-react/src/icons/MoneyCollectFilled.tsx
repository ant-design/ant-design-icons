// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyCollectFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoneyCollectFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MoneyCollectFilled.displayName = 'MoneyCollectFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoneyCollectFilled);