// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumWorkmarkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MediumWorkmarkOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MediumWorkmarkOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MediumWorkmarkOutlined';
}

export default RefIcon;