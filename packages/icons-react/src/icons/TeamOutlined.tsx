// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TeamOutlinedSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TeamOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TeamOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TeamOutlined';
}

export default RefIcon;