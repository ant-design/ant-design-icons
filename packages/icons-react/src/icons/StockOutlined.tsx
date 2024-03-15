// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StockOutlinedSvg from '@ant-design/icons-svg/lib/asn/StockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StockOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StockOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StockOutlined';
}

export default RefIcon;