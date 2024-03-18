// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DownCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DownCircleFilled';
}

export default RefIcon;