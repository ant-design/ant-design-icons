// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ShoppingTwoTone';
}

export default RefIcon;