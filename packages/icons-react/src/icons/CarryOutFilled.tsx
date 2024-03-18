// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarryOutFilledSvg from '@ant-design/icons-svg/lib/asn/CarryOutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarryOutFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarryOutFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CarryOutFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CarryOutFilled';
}

export default RefIcon;