// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FlagFilled';
}

export default RefIcon;