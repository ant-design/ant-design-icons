// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedoOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedoOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedoOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RedoOutlined.displayName = 'RedoOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedoOutlined);