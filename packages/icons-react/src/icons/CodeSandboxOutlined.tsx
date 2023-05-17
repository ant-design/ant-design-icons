// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeSandboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSandboxOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSandboxOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CodeSandboxOutlined.displayName = 'CodeSandboxOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSandboxOutlined);