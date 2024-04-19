// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/MutedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MutedOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MutedOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MutedOutlined.displayName = 'MutedOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MutedOutlined);