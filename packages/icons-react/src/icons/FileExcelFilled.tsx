// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExcelFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileExcelFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileExcelFilled.displayName = 'FileExcelFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileExcelFilled);