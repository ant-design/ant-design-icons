// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusSquareOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PlusSquareOutlined.displayName = 'PlusSquareOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusSquareOutlined);