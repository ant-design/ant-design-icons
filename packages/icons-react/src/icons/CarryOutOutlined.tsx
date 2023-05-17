// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarryOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarryOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarryOutOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarryOutOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CarryOutOutlined.displayName = 'CarryOutOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarryOutOutlined);