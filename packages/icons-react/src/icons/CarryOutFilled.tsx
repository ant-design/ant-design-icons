// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarryOutFilledSvg from '@ant-design/icons-svg/lib/asn/CarryOutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarryOutFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarryOutFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CarryOutFilled.displayName = 'CarryOutFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarryOutFilled);