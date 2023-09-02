// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwitcherFilledSvg from '@ant-design/icons-svg/lib/asn/SwitcherFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwitcherFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SwitcherFilled.displayName = 'SwitcherFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SwitcherFilled);