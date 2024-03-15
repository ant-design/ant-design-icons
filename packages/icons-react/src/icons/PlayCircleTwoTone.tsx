// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlayCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlayCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlayCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayCircleTwoTone';
}

export default RefIcon;