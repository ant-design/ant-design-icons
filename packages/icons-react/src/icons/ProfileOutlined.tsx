// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ProfileOutlined';
}

export default RefIcon;