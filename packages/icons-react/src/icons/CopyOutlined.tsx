// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CopyOutlined.displayName = 'CopyOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyOutlined);