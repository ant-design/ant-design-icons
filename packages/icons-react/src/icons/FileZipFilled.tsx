// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileZipFilledSvg from '@ant-design/icons-svg/lib/asn/FileZipFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileZipFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileZipFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileZipFilled.displayName = 'FileZipFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileZipFilled);