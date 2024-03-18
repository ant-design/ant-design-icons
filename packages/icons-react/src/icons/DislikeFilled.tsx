// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DislikeFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DislikeFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DislikeFilled';
}

export default RefIcon;