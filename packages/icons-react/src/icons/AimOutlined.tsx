// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AimOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AimOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AimOutlined.displayName = 'AimOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AimOutlined);