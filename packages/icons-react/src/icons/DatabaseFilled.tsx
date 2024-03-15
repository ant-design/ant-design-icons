// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DatabaseFilled';
}

export default RefIcon;