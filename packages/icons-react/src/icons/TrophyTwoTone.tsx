// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrophyTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrophyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrophyTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TrophyTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TrophyTwoTone';
}

export default RefIcon;