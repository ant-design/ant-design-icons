// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ArrowUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowUpOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowUpOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpOutlined';
}

export default RefIcon;