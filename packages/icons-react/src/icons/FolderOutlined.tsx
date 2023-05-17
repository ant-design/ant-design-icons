// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FolderOutlined.displayName = 'FolderOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOutlined);