// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileAddFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileAddFilled.displayName = 'FileAddFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileAddFilled);