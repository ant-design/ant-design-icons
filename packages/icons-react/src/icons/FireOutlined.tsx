// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FireOutlinedSvg from '@ant-design/icons-svg/lib/asn/FireOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FireOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FireOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FireOutlined.displayName = 'FireOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FireOutlined);