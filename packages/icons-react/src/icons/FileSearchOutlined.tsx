// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSearchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileSearchOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileSearchOutlined.displayName = 'FileSearchOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileSearchOutlined);