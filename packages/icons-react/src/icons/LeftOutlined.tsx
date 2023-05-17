// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LeftOutlined.displayName = 'LeftOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftOutlined);