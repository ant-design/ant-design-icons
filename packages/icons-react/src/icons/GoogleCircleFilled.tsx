// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoogleCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GoogleCircleFilled.displayName = 'GoogleCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoogleCircleFilled);