// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LikeTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LikeTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LikeTwoTone';
}

export default RefIcon;