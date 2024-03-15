// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwapRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwapRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwapRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SwapRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SwapRightOutlined';
}

export default RefIcon;