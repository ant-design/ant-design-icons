// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MediumCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MediumCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MediumCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MediumCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MediumCircleFilled';
}

export default RefIcon;