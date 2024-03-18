// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PushpinOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PushpinOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PushpinOutlined';
}

export default RefIcon;