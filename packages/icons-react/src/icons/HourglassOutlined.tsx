// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HourglassOutlinedSvg from '@ant-design/icons-svg/lib/asn/HourglassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HourglassOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HourglassOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HourglassOutlined';
}

export default RefIcon;