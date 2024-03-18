// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GooglePlusCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GooglePlusCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GooglePlusCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GooglePlusCircleFilled';
}

export default RefIcon;