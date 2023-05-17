// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HighlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HighlightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HighlightOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HighlightOutlined.displayName = 'HighlightOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HighlightOutlined);