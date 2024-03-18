// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RightCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RightCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RightCircleFilled';
}

export default RefIcon;