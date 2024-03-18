// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VideoCameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoCameraTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoCameraTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VideoCameraTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VideoCameraTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VideoCameraTwoTone';
}

export default RefIcon;