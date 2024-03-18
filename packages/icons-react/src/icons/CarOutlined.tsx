// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CarOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CarOutlined';
}

export default RefIcon;