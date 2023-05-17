// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloudFilled.displayName = 'CloudFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudFilled);