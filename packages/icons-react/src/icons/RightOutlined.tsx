// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RightOutlined.displayName = 'RightOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightOutlined);