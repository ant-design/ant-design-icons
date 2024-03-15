// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QqCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QqCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QqCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QqCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(QqCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'QqCircleFilled';
}

export default RefIcon;