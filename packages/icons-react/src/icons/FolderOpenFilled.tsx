// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderOpenFilledSvg from '@ant-design/icons-svg/lib/asn/FolderOpenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOpenFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOpenFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FolderOpenFilled.displayName = 'FolderOpenFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOpenFilled);