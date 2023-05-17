// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ControlOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ControlOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ControlOutlined.displayName = 'ControlOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ControlOutlined);