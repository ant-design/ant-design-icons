// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckCircleFilled';
}

export default RefIcon;