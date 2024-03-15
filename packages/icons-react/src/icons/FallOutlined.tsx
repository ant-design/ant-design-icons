// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FallOutlinedSvg from '@ant-design/icons-svg/lib/asn/FallOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FallOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FallOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FallOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FallOutlined';
}

export default RefIcon;