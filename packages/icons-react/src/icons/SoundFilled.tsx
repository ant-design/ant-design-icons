// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SoundFilledSvg from '@ant-design/icons-svg/lib/asn/SoundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SoundFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SoundFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SoundFilled';
}

export default RefIcon;