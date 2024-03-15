// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ProfileFilled';
}

export default RefIcon;