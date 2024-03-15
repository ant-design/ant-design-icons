// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnlockFilledSvg from '@ant-design/icons-svg/lib/asn/UnlockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnlockFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnlockFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UnlockFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UnlockFilled';
}

export default RefIcon;