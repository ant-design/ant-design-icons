// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DingtalkSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DingtalkSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DingtalkSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DingtalkSquareFilled';
}

export default RefIcon;