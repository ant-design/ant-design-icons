// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ColumnWidthOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ColumnWidthOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ColumnWidthOutlined.displayName = 'ColumnWidthOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ColumnWidthOutlined);