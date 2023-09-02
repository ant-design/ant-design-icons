// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileAddOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileAddOutlined.displayName = 'FileAddOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileAddOutlined);