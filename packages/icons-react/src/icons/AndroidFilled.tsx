// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AndroidFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AndroidFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AndroidFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AndroidFilled';
}

export default RefIcon;