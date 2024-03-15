// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExclamationCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExclamationCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExclamationCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ExclamationCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExclamationCircleOutlined';
}

export default RefIcon;