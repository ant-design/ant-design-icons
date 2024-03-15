// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwapOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwapOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwapOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SwapOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SwapOutlined';
}

export default RefIcon;