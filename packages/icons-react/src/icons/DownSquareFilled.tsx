// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DownSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DownSquareFilled';
}

export default RefIcon;