// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileGifOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileGifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileGifOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileGifOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileGifOutlined.displayName = 'FileGifOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileGifOutlined);