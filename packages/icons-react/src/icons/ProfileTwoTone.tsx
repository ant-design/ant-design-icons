// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ProfileTwoTone';
}

export default RefIcon;