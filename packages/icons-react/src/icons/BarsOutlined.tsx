// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BarsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BarsOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BarsOutlined.displayName = 'BarsOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BarsOutlined);