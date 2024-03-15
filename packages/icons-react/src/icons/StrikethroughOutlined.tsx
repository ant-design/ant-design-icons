// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StrikethroughOutlinedSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StrikethroughOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StrikethroughOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StrikethroughOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StrikethroughOutlined';
}

export default RefIcon;