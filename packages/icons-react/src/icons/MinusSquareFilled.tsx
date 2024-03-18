// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MinusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusSquareFilled';
}

export default RefIcon;