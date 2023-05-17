// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FlagOutlined.displayName = 'FlagOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagOutlined);