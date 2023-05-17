// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoundOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PoundOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PoundOutlined.displayName = 'PoundOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PoundOutlined);