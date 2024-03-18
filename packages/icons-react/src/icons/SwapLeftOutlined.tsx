// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwapLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwapLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwapLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SwapLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SwapLeftOutlined';
}

export default RefIcon;