// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HourglassTwoToneSvg from '@ant-design/icons-svg/lib/asn/HourglassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HourglassTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HourglassTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HourglassTwoTone';
}

export default RefIcon;