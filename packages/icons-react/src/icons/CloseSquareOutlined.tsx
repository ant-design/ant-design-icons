// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseSquareOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloseSquareOutlined.displayName = 'CloseSquareOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseSquareOutlined);