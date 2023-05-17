// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DragOutlinedSvg from '@ant-design/icons-svg/lib/asn/DragOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DragOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DragOutlined.displayName = 'DragOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DragOutlined);