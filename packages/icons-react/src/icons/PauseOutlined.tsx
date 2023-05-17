// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PauseOutlined.displayName = 'PauseOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseOutlined);