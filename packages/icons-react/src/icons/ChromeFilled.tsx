// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChromeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChromeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ChromeFilled.displayName = 'ChromeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChromeFilled);