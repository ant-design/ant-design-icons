// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UpSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UpSquareTwoTone';
}

export default RefIcon;