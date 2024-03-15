// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrophyOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TrophyOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TrophyOutlined';
}

export default RefIcon;