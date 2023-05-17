// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReloadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReloadOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ReloadOutlined.displayName = 'ReloadOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ReloadOutlined);