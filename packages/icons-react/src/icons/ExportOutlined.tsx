// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExportOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExportOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ExportOutlined.displayName = 'ExportOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExportOutlined);