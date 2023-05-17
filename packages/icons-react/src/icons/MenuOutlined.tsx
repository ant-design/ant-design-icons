// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MenuOutlined.displayName = 'MenuOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuOutlined);