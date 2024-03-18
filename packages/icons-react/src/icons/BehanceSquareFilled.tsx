// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BehanceSquareFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BehanceSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BehanceSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BehanceSquareFilled';
}

export default RefIcon;