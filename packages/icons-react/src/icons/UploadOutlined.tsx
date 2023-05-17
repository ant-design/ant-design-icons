// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UploadOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UploadOutlined.displayName = 'UploadOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UploadOutlined);