// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudSyncOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudSyncOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloudSyncOutlined.displayName = 'CloudSyncOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudSyncOutlined);