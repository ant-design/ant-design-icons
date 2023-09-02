// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RocketTwoToneSvg from '@ant-design/icons-svg/lib/asn/RocketTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RocketTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RocketTwoTone.displayName = 'RocketTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RocketTwoTone);