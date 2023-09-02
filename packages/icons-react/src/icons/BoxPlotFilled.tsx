// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoxPlotFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BoxPlotFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BoxPlotFilled.displayName = 'BoxPlotFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BoxPlotFilled);