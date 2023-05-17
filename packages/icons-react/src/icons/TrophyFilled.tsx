// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrophyFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TrophyFilled.displayName = 'TrophyFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrophyFilled);