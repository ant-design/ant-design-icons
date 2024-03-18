// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DribbbleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DribbbleSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DribbbleSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DribbbleSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DribbbleSquareFilled';
}

export default RefIcon;