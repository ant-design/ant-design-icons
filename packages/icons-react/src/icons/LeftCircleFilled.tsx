// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftCircleFilledSvg from '@ant-design/icons-svg/lib/asn/LeftCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LeftCircleFilled';
}

export default RefIcon;