// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ForwardOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ForwardOutlined.displayName = 'ForwardOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ForwardOutlined);