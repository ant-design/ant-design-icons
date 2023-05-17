// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ZoomOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomOutOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoomOutOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ZoomOutOutlined.displayName = 'ZoomOutOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoomOutOutlined);