// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CiCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CiCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CiCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CiCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CiCircleFilled';
}

export default RefIcon;