// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoonFilledSvg from '@ant-design/icons-svg/lib/asn/MoonFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoonFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MoonFilled.displayName = 'MoonFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoonFilled);