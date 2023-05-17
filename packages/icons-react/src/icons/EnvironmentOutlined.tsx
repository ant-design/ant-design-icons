// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnvironmentOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EnvironmentOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EnvironmentOutlined.displayName = 'EnvironmentOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EnvironmentOutlined);