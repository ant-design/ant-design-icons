// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HeartTwoTone.displayName = 'HeartTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartTwoTone);