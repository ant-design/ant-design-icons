// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TabletOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TabletOutlined.displayName = 'TabletOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TabletOutlined);