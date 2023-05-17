// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ControlFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ControlFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ControlFilled.displayName = 'ControlFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ControlFilled);