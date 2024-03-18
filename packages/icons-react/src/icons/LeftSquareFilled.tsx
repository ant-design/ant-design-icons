// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftSquareFilledSvg from '@ant-design/icons-svg/lib/asn/LeftSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LeftSquareFilled';
}

export default RefIcon;