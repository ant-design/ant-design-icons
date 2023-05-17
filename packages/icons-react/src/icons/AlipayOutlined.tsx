// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlipayOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AlipayOutlined.displayName = 'AlipayOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlipayOutlined);