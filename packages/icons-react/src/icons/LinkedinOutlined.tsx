// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinkedinOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkedinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkedinOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkedinOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkedinOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LinkedinOutlined';
}

export default RefIcon;