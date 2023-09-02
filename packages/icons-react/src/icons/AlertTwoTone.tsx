// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlertTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AlertTwoTone.displayName = 'AlertTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertTwoTone);