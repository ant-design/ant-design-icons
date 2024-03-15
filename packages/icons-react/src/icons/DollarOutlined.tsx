// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DollarOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DollarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DollarOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DollarOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DollarOutlined';
}

export default RefIcon;