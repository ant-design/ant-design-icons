// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CodeTwoTone.displayName = 'CodeTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeTwoTone);