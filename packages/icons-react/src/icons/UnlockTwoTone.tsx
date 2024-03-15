// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnlockTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnlockTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UnlockTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UnlockTwoTone';
}

export default RefIcon;