// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SketchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SketchOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SketchOutlined.displayName = 'SketchOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SketchOutlined);