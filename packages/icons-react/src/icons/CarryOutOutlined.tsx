// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarryOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarryOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarryOutOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarryOutOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CarryOutOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CarryOutOutlined';
}

export default RefIcon;