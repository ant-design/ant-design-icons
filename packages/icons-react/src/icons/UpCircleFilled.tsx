// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpCircleFilledSvg from '@ant-design/icons-svg/lib/asn/UpCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UpCircleFilled.displayName = 'UpCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UpCircleFilled);