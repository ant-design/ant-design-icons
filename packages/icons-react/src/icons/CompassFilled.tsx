// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompassFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CompassFilled.displayName = 'CompassFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompassFilled);