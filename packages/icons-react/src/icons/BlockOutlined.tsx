// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BlockOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BlockOutlined.displayName = 'BlockOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BlockOutlined);