// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MutedFilledSvg from '@ant-design/icons-svg/lib/asn/MutedFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MutedFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MutedFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MutedFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MutedFilled';
}

export default RefIcon;