// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SoundTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SoundTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SoundTwoTone';
}

export default RefIcon;