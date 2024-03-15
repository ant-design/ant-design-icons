// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoogleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoogleSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GoogleSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GoogleSquareFilled';
}

export default RefIcon;