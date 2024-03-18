// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RightSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RightSquareTwoTone';
}

export default RefIcon;