// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CodeFilled.displayName = 'CodeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeFilled);