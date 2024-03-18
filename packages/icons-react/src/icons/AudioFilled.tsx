// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AudioFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AudioFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AudioFilled';
}

export default RefIcon;