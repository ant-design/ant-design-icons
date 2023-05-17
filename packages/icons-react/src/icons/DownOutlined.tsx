// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DownOutlined.displayName = 'DownOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownOutlined);