// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShopTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShopTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShopTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShopTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ShopTwoTone';
}

export default RefIcon;