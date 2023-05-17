// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExpandOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExpandOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ExpandOutlined.displayName = 'ExpandOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExpandOutlined);