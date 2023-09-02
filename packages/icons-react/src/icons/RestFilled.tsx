// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RestFilledSvg from '@ant-design/icons-svg/lib/asn/RestFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RestFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RestFilled.displayName = 'RestFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RestFilled);