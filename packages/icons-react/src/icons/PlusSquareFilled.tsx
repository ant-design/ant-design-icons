// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusSquareFilled';
}

export default RefIcon;