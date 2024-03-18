// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckCircleTwoTone';
}

export default RefIcon;