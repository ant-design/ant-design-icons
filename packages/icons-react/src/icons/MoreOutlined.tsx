// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoreOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MoreOutlined.displayName = 'MoreOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoreOutlined);