// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FastForwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FastForwardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FastForwardFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FastForwardFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FastForwardFilled';
}

export default RefIcon;