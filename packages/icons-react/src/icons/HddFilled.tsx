// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HddFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HddFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HddFilled.displayName = 'HddFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HddFilled);