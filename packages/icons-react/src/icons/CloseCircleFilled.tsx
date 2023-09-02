// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloseCircleFilled.displayName = 'CloseCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseCircleFilled);