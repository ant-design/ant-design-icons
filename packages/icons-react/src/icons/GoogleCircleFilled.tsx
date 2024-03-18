// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoogleCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GoogleCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GoogleCircleFilled';
}

export default RefIcon;