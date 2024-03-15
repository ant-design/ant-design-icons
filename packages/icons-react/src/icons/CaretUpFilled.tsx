// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretUpFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretUpFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretUpFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretUpFilled';
}

export default RefIcon;