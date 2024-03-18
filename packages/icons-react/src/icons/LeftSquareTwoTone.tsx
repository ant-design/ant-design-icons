// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LeftSquareTwoTone';
}

export default RefIcon;