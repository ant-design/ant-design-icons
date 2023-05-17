// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  StarOutlined.displayName = 'StarOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StarOutlined);