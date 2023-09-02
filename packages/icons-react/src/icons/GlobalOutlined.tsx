// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GlobalOutlined.displayName = 'GlobalOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalOutlined);