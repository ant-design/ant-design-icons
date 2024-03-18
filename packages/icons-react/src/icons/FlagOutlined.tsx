// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FlagOutlined';
}

export default RefIcon;