// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HeartTwoTone';
}

export default RefIcon;