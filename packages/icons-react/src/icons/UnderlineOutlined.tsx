// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnderlineOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnderlineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnderlineOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnderlineOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UnderlineOutlined.displayName = 'UnderlineOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnderlineOutlined);