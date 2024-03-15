// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ShoppingFilled';
}

export default RefIcon;