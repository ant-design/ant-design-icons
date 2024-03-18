// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnvironmentFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EnvironmentFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EnvironmentFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EnvironmentFilled';
}

export default RefIcon;