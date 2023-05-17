// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinkedinOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkedinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkedinOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkedinOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LinkedinOutlined.displayName = 'LinkedinOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkedinOutlined);