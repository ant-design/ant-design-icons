// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScanOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScanOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ScanOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ScanOutlined';
}

export default RefIcon;