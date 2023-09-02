// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DownCircleFilled.displayName = 'DownCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownCircleFilled);