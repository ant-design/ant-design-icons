// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReadOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ReadOutlined.displayName = 'ReadOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ReadOutlined);