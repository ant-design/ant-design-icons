// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileWordOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileWordOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWordOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileWordOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileWordOutlined.displayName = 'FileWordOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileWordOutlined);