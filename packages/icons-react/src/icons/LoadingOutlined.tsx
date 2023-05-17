// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LoadingOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoadingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoadingOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LoadingOutlined.displayName = 'LoadingOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LoadingOutlined);