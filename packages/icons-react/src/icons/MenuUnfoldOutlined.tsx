// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MenuUnfoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuUnfoldOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuUnfoldOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuUnfoldOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MenuUnfoldOutlined';
}

export default RefIcon;