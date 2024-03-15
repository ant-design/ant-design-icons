// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckCircleOutlined';
}

export default RefIcon;