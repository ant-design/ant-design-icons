// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StepForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepForwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepForwardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StepForwardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StepForwardOutlined';
}

export default RefIcon;