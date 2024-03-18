// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitchOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitchOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TwitchOutlined';
}

export default RefIcon;