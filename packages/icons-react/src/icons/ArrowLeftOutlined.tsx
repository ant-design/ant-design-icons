// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ArrowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowLeftOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowLeftOutlined);