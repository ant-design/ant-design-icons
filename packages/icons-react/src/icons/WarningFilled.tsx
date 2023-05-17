// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WarningFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WarningFilled.displayName = 'WarningFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WarningFilled);