// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UpOutlined.displayName = 'UpOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UpOutlined);