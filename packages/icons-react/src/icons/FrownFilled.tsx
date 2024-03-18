// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FrownFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FrownFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FrownFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FrownFilled';
}

export default RefIcon;