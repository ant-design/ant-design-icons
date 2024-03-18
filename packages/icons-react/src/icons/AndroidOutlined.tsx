// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AndroidOutlinedSvg from '@ant-design/icons-svg/lib/asn/AndroidOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AndroidOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AndroidOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AndroidOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AndroidOutlined';
}

export default RefIcon;