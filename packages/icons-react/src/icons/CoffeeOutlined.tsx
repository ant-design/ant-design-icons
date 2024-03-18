// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CoffeeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoffeeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CoffeeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CoffeeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CoffeeOutlined';
}

export default RefIcon;