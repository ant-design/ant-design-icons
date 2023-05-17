// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownloadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownloadOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DownloadOutlined.displayName = 'DownloadOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownloadOutlined);