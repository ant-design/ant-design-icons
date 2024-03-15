// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseSquareFilled';
}

export default RefIcon;