// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BoxPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoxPlotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoxPlotOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BoxPlotOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BoxPlotOutlined.displayName = 'BoxPlotOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BoxPlotOutlined);