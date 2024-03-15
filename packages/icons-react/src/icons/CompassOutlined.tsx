// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CompassOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompassOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CompassOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CompassOutlined';
}

export default RefIcon;