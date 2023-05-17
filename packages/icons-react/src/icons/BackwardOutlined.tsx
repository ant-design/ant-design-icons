// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackwardOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BackwardOutlined.displayName = 'BackwardOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackwardOutlined);