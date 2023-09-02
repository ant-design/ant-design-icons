// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileImageOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileImageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileImageOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileImageOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileImageOutlined.displayName = 'FileImageOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileImageOutlined);