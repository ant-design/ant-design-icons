// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BarcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BarcodeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BarcodeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BarcodeOutlined';
}

export default RefIcon;