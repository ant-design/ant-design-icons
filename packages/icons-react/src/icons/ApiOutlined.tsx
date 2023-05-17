// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ApiOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApiOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ApiOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ApiOutlined.displayName = 'ApiOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ApiOutlined);