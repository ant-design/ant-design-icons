// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckSquareOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CheckSquareOutlined.displayName = 'CheckSquareOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckSquareOutlined);