// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MobileTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MobileTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MobileTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MobileTwoTone';
}

export default RefIcon;