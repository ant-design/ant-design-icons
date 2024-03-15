// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShopOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShopOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ShopOutlined';
}

export default RefIcon;