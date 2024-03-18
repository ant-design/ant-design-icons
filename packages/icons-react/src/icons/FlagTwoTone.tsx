// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FlagTwoTone';
}

export default RefIcon;