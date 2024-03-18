// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DownSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DownSquareTwoTone';
}

export default RefIcon;