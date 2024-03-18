// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LikeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LikeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LikeOutlined';
}

export default RefIcon;