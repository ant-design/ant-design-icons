// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HddTwoToneSvg from '@ant-design/icons-svg/lib/asn/HddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HddTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HddTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HddTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HddTwoTone';
}

export default RefIcon;