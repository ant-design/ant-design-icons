// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileMarkdownFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileMarkdownFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileMarkdownFilled.displayName = 'FileMarkdownFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileMarkdownFilled);