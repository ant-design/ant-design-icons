// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PauseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PauseCircleOutlined.displayName = 'PauseCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseCircleOutlined);