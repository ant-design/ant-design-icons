// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SmileTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmileTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SmileTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SmileTwoTone';
}

export default RefIcon;