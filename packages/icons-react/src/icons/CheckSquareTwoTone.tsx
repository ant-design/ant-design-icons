// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckSquareTwoTone';
}

export default RefIcon;