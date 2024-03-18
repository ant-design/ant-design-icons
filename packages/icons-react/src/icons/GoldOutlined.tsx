// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GoldOutlined';
}

export default RefIcon;