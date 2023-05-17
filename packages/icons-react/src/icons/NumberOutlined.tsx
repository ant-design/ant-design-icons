// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NumberOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NumberOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  NumberOutlined.displayName = 'NumberOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NumberOutlined);