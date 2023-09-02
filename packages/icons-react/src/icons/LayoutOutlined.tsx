// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LayoutOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LayoutOutlined.displayName = 'LayoutOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LayoutOutlined);