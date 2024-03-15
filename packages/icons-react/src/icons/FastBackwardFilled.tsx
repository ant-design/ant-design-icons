// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FastBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastBackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FastBackwardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FastBackwardFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FastBackwardFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FastBackwardFilled';
}

export default RefIcon;