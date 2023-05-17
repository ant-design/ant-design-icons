// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwitcherOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SwitcherOutlined.displayName = 'SwitcherOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SwitcherOutlined);