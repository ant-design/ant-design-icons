// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretUpOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretUpOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretUpOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretUpOutlined';
}

export default RefIcon;