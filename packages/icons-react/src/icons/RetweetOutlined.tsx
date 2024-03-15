// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RetweetOutlinedSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RetweetOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RetweetOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RetweetOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RetweetOutlined';
}

export default RefIcon;