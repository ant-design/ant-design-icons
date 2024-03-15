// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FacebookFilledSvg from '@ant-design/icons-svg/lib/asn/FacebookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FacebookFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FacebookFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FacebookFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FacebookFilled';
}

export default RefIcon;