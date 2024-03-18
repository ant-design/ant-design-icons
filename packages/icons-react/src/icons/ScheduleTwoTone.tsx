// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScheduleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScheduleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ScheduleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ScheduleTwoTone';
}

export default RefIcon;