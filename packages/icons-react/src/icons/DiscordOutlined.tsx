// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiscordOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiscordOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscordOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiscordOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DiscordOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DiscordOutlined';
}

export default RefIcon;