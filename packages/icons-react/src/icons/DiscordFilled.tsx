// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiscordFilledSvg from '@ant-design/icons-svg/lib/asn/DiscordFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscordFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiscordFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DiscordFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DiscordFilled';
}

export default RefIcon;