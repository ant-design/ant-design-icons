// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FlagTwoTone.displayName = 'FlagTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagTwoTone);