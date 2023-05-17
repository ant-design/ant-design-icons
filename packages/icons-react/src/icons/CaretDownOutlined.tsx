// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretDownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretDownOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CaretDownOutlined.displayName = 'CaretDownOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretDownOutlined);