// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusCircleFilled';
}

export default RefIcon;