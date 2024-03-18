// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/CrownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CrownTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CrownTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CrownTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CrownTwoTone';
}

export default RefIcon;