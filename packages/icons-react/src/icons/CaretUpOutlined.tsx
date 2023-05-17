// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretUpOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretUpOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CaretUpOutlined.displayName = 'CaretUpOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretUpOutlined);