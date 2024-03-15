// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StopTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StopTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StopTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StopTwoTone';
}

export default RefIcon;