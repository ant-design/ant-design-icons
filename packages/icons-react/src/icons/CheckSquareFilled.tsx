// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckSquareFilled';
}

export default RefIcon;