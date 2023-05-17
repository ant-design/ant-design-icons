// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import Html5FilledSvg from '@ant-design/icons-svg/lib/asn/Html5Filled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Html5Filled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={Html5FilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  Html5Filled.displayName = 'Html5Filled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Html5Filled);