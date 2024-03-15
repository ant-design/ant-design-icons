// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompassFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CompassFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CompassFilled';
}

export default RefIcon;