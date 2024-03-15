// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HeartOutlined';
}

export default RefIcon;