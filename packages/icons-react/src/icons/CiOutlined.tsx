// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CiOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CiOutlined.displayName = 'CiOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CiOutlined);