// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuFoldOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuFoldOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuFoldOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MenuFoldOutlined';
}

export default RefIcon;