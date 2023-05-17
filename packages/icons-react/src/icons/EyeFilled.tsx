// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EyeFilled.displayName = 'EyeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeFilled);