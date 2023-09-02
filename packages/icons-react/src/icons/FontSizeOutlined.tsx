// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FontSizeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontSizeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontSizeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FontSizeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FontSizeOutlined.displayName = 'FontSizeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FontSizeOutlined);