// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeploymentUnitOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeploymentUnitOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DeploymentUnitOutlined.displayName = 'DeploymentUnitOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeploymentUnitOutlined);