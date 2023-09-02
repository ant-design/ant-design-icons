// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnvironmentTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EnvironmentTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EnvironmentTwoTone.displayName = 'EnvironmentTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EnvironmentTwoTone);