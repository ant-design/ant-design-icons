// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrophyFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TrophyFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TrophyFilled';
}

export default RefIcon;