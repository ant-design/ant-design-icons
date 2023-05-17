// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretRightOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CaretRightOutlined.displayName = 'CaretRightOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretRightOutlined);