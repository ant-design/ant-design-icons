// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretRightOutlined';
}

export default RefIcon;