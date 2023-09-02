// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileWordFilledSvg from '@ant-design/icons-svg/lib/asn/FileWordFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWordFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileWordFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileWordFilled.displayName = 'FileWordFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileWordFilled);