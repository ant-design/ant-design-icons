// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiffOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiffOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiffOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DiffOutlined.displayName = 'DiffOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiffOutlined);