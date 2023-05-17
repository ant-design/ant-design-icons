// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CodeOutlined.displayName = 'CodeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeOutlined);