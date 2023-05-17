// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AmazonOutlinedSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AmazonOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AmazonOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AmazonOutlined.displayName = 'AmazonOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AmazonOutlined);