// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DislikeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DislikeOutlined.displayName = 'DislikeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DislikeOutlined);