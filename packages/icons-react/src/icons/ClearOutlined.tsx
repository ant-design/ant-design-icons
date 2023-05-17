// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClearOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClearOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ClearOutlined.displayName = 'ClearOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClearOutlined);