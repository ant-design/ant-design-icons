// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DollarCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DollarCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DollarCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DollarCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DollarCircleOutlined';
}

export default RefIcon;