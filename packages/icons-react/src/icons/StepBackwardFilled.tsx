// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StepBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepBackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepBackwardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepBackwardFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StepBackwardFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StepBackwardFilled';
}

export default RefIcon;