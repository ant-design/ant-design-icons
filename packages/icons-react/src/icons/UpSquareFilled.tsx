// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UpSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UpSquareFilled';
}

export default RefIcon;