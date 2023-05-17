// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkypeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkypeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SkypeOutlined.displayName = 'SkypeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SkypeOutlined);