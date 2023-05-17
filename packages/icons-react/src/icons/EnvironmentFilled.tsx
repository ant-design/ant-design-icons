// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnvironmentFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EnvironmentFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EnvironmentFilled.displayName = 'EnvironmentFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EnvironmentFilled);