// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretLeftFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretLeftFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretLeftFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretLeftFilled';
}

export default RefIcon;