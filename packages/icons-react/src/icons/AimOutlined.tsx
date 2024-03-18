// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AimOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AimOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AimOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AimOutlined';
}

export default RefIcon;