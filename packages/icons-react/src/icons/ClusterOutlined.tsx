// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClusterOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClusterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClusterOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ClusterOutlined.displayName = 'ClusterOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClusterOutlined);