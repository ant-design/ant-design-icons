// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileProtectOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileProtectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileProtectOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileProtectOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileProtectOutlined.displayName = 'FileProtectOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileProtectOutlined);