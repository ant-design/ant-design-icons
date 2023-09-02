// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuFoldOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuFoldOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MenuFoldOutlined.displayName = 'MenuFoldOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuFoldOutlined);