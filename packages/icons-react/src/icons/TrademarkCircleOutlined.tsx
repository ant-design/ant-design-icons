// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrademarkCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrademarkCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TrademarkCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TrademarkCircleOutlined';
}

export default RefIcon;