// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaobaoSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaobaoSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TaobaoSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TaobaoSquareFilled';
}

export default RefIcon;