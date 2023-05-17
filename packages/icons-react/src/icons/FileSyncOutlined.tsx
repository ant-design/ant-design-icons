// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSyncOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileSyncOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileSyncOutlined.displayName = 'FileSyncOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileSyncOutlined);