// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RollbackOutlinedSvg from '@ant-design/icons-svg/lib/asn/RollbackOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RollbackOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RollbackOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RollbackOutlined.displayName = 'RollbackOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RollbackOutlined);