// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrademarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrademarkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrademarkOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TrademarkOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TrademarkOutlined';
}

export default RefIcon;