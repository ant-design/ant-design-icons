// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FrownFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FrownFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FrownFilled.displayName = 'FrownFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FrownFilled);