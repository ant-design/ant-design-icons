// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileTextOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileTextOutlined.displayName = 'FileTextOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileTextOutlined);