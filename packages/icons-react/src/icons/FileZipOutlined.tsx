// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileZipOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileZipOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileZipOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileZipOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileZipOutlined.displayName = 'FileZipOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileZipOutlined);