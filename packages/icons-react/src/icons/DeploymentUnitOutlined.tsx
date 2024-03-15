// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeploymentUnitOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeploymentUnitOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DeploymentUnitOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DeploymentUnitOutlined';
}

export default RefIcon;