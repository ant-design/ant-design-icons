// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderViewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderViewOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderViewOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FolderViewOutlined.displayName = 'FolderViewOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderViewOutlined);