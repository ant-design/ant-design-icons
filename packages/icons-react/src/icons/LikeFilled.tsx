// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LikeFilledSvg from '@ant-design/icons-svg/lib/asn/LikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LikeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LikeFilled.displayName = 'LikeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LikeFilled);