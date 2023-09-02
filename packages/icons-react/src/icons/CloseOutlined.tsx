// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloseOutlined.displayName = 'CloseOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseOutlined);