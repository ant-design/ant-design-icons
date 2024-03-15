// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrademarkCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrademarkCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TrademarkCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TrademarkCircleFilled';
}

export default RefIcon;