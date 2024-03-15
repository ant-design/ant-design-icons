// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadiusBottomleftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RadiusBottomleftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RadiusBottomleftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RadiusBottomleftOutlined';
}

export default RefIcon;