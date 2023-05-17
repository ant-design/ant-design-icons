// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodepenOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodepenOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodepenOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CodepenOutlined.displayName = 'CodepenOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodepenOutlined);