// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CarTwoTone.displayName = 'CarTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarTwoTone);