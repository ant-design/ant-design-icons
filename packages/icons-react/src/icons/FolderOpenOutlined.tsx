// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderOpenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOpenOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOpenOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FolderOpenOutlined.displayName = 'FolderOpenOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOpenOutlined);