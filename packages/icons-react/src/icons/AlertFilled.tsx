// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AlertFilled.displayName = 'AlertFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertFilled);