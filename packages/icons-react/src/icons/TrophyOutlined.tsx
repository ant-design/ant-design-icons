// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrophyOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TrophyOutlined.displayName = 'TrophyOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrophyOutlined);