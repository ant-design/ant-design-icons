// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExclamationCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExclamationCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExclamationCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ExclamationCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExclamationCircleFilled';
}

export default RefIcon;