// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretDownFilledSvg from '@ant-design/icons-svg/lib/asn/CaretDownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretDownFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretDownFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CaretDownFilled.displayName = 'CaretDownFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretDownFilled);