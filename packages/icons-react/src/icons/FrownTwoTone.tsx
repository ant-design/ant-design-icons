// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FrownTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FrownTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FrownTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FrownTwoTone';
}

export default RefIcon;