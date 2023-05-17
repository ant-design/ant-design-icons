// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningOutlinedSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WarningOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WarningOutlined.displayName = 'WarningOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WarningOutlined);