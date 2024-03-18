// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QqSquareFilledSvg from '@ant-design/icons-svg/lib/asn/QqSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QqSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QqSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(QqSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'QqSquareFilled';
}

export default RefIcon;