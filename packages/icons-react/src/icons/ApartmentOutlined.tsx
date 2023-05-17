// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ApartmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApartmentOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ApartmentOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ApartmentOutlined.displayName = 'ApartmentOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ApartmentOutlined);