// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BellFilled.displayName = 'BellFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellFilled);