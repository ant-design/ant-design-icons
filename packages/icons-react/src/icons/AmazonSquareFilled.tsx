// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AmazonSquareFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AmazonSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AmazonSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AmazonSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AmazonSquareFilled';
}

export default RefIcon;