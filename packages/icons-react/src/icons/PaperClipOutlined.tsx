// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PaperClipOutlinedSvg from '@ant-design/icons-svg/lib/asn/PaperClipOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaperClipOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PaperClipOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PaperClipOutlined.displayName = 'PaperClipOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PaperClipOutlined);