// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SoundOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SoundOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SoundOutlined';
}

export default RefIcon;