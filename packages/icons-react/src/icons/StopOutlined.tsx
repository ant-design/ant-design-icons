// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StopOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StopOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StopOutlined';
}

export default RefIcon;