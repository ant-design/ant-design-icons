// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RocketTwoToneSvg from '@ant-design/icons-svg/lib/asn/RocketTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RocketTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RocketTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RocketTwoTone';
}

export default RefIcon;