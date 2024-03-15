// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarryOutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarryOutTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarryOutTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CarryOutTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CarryOutTwoTone';
}

export default RefIcon;