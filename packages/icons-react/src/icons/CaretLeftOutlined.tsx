// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretLeftOutlined';
}

export default RefIcon;