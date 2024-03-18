// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DislikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DislikeTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DislikeTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DislikeTwoTone';
}

export default RefIcon;