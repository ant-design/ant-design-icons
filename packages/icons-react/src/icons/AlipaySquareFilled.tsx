// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipaySquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlipaySquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlipaySquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlipaySquareFilled';
}

export default RefIcon;