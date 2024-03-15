// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DollarCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DollarCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DollarCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DollarCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DollarCircleTwoTone';
}

export default RefIcon;