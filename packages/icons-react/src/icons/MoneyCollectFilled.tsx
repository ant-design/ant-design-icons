// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyCollectFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoneyCollectFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MoneyCollectFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoneyCollectFilled';
}

export default RefIcon;