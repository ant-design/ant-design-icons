// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AudioOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AudioOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AudioOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AudioOutlined';
}

export default RefIcon;