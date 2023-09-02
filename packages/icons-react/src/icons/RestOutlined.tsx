// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RestOutlinedSvg from '@ant-design/icons-svg/lib/asn/RestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RestOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RestOutlined.displayName = 'RestOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RestOutlined);