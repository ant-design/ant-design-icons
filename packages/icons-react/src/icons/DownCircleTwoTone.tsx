// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DownCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DownCircleTwoTone';
}

export default RefIcon;