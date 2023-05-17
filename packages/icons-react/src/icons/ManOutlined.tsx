// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ManOutlinedSvg from '@ant-design/icons-svg/lib/asn/ManOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ManOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ManOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ManOutlined.displayName = 'ManOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ManOutlined);