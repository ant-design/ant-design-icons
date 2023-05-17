// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ToolOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToolOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToolOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ToolOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ToolOutlined.displayName = 'ToolOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ToolOutlined);