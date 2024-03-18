// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyCollectTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoneyCollectTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MoneyCollectTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoneyCollectTwoTone';
}

export default RefIcon;