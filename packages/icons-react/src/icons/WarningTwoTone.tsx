// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WarningTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WarningTwoTone.displayName = 'WarningTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WarningTwoTone);