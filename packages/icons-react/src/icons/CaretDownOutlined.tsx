// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretDownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretDownOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretDownOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretDownOutlined';
}

export default RefIcon;