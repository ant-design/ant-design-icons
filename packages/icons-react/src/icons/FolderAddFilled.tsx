// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderAddFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderAddFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FolderAddFilled.displayName = 'FolderAddFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderAddFilled);