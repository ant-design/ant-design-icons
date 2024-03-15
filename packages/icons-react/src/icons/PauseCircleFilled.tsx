// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PauseCircleFilled';
}

export default RefIcon;