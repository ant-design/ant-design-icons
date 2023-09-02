// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RocketFilledSvg from '@ant-design/icons-svg/lib/asn/RocketFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RocketFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RocketFilled.displayName = 'RocketFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RocketFilled);