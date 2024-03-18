// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AudioTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AudioTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AudioTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AudioTwoTone';
}

export default RefIcon;