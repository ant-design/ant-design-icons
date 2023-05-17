// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BugOutlinedSvg from '@ant-design/icons-svg/lib/asn/BugOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BugOutlined.displayName = 'BugOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BugOutlined);