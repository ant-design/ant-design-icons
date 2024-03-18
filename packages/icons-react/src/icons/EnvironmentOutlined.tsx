// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnvironmentOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EnvironmentOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EnvironmentOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EnvironmentOutlined';
}

export default RefIcon;