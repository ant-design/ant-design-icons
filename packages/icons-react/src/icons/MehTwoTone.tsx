// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MehTwoToneSvg from '@ant-design/icons-svg/lib/asn/MehTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MehTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MehTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MehTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MehTwoTone';
}

export default RefIcon;