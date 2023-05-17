// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderAddOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FolderAddOutlined.displayName = 'FolderAddOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderAddOutlined);