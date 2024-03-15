// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StepBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepBackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepBackwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepBackwardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StepBackwardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StepBackwardOutlined';
}

export default RefIcon;