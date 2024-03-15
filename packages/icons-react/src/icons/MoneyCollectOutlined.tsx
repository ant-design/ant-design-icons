// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoneyCollectOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyCollectOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoneyCollectOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MoneyCollectOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoneyCollectOutlined';
}

export default RefIcon;