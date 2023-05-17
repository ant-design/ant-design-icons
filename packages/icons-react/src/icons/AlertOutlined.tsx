// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlertOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AlertOutlined.displayName = 'AlertOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertOutlined);